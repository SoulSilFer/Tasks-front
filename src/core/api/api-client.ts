import axios, { AxiosHeaders, AxiosRequestHeaders, AxiosResponse } from 'axios';

import { SignInResponse, STORAGE_KEYS } from 'src/common';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  InvalidCredentialsError,
  LocalStorage,
} from 'src/core';

export class ApiClient implements HttpClient {
  async request<T>(
    data: HttpRequest,
    unauthorized?: boolean
  ): Promise<HttpResponse<T>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: unauthorized
          ? data.headers
          : this.applyDefaultConfig(data.headers),
        params: data.params,
        responseType: data.responseType,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 401 && !unauthorized) {
        this.logout();
        throw new InvalidCredentialsError();
      } else {
        axiosResponse = error.response;
      }
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data ?? axiosResponse,
    };
  }

  private applyDefaultConfig(
    headers?: AxiosRequestHeaders
  ): AxiosRequestHeaders {
    const local = new LocalStorage();
    const token = local.get(STORAGE_KEYS.TOKEN) as SignInResponse;

    if (token?.access_token) {
      const axiosHeaders = new AxiosHeaders();
      axiosHeaders.set('Authorization', `Bearer ${token.access_token}`);
      axiosHeaders.set('Content-Type', 'application/json');

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          axiosHeaders.set(key, value as string);
        });
      }

      return axiosHeaders;
    } else {
      console.error('Invalid credentials: Token not found');
      throw new InvalidCredentialsError();
    }
  }

  private logout(): void {
    const local = new LocalStorage();
    local.delete(STORAGE_KEYS.TOKEN);

    window.location.href = '/login';
  }
}
