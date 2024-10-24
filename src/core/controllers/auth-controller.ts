/// src\core\controllers\auth-controller.ts

import { HttpStatusCode } from 'axios';

import {
  GoogleAuthType,
  SignInResponse,
  SignInType,
  SignUpResponse,
  SignUpType,
  STORAGE_KEYS,
} from 'src/common';
import { HttpClient, HttpResponse, LocalStorage } from 'src/core';

export class AuthController {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async auth(params: SignInType): Promise<HttpResponse<SignInResponse>> {
    try {
      const response = await this.httpClient.request<SignInResponse>(
        {
          url: this.url,
          method: 'post',
          body: params,
        },
        true
      );

      const success =
        response.statusCode === HttpStatusCode.Created ||
        response.statusCode === HttpStatusCode.Ok;

      if (success) {
        const localStorage = new LocalStorage();
        await localStorage.set(STORAGE_KEYS.TOKEN, response.body);
      } else {
        console.error('Error on authentication:', response.body);
      }

      return response;
    } catch (error) {
      console.error('Error during API request:', error);
      throw error;
    }
  }

  async refresh(): Promise<HttpResponse<SignInResponse>> {
    try {
      const localStorage = new LocalStorage();
      const token = localStorage.get(STORAGE_KEYS.TOKEN) as SignInResponse;

      if (!token?.access_token) {
        throw new Error('No token available for refresh');
      }

      const response = await this.httpClient.request<SignInResponse>(
        {
          url: this.url,
          method: 'get',
        },
        false
      );

      const success =
        response.statusCode === HttpStatusCode.Created ||
        response.statusCode === HttpStatusCode.Ok;

      if (success && response.body) {
        await localStorage.set(STORAGE_KEYS.TOKEN, response.body);
      } else {
        console.error('Error on token refresh:', response.body);
      }

      return response;
    } catch (error) {
      console.error('Error during refresh request:', error);
      throw error;
    }
  }

  async signUp(params: SignUpType): Promise<HttpResponse<SignUpResponse>> {
    const { birthdate, email, gender, name, password } = params;

    const body = {
      email,
      name,
      password,
      gender: gender ? gender : null,
      birthdate: birthdate ? birthdate : null,
      isGoogle: false,
    };

    const response = await this.httpClient.request<SignUpResponse>(
      {
        url: this.url,
        method: 'post',
        body,
      },
      true
    );

    return response;
  }

  async google(body: GoogleAuthType): Promise<HttpResponse<SignInResponse>> {
    try {
      const response = await this.httpClient.request<SignInResponse>(
        {
          url: this.url,
          method: 'post',
          body: body,
        },
        true
      );

      const success =
        response.statusCode === HttpStatusCode.Created ||
        response.statusCode === HttpStatusCode.Ok;

      if (success) {
        const localStorage = new LocalStorage();
        await localStorage.set(STORAGE_KEYS.TOKEN, response.body);
      } else {
        console.error('Error on authentication:', response.body);
      }

      return response;
    } catch (error) {
      console.error('Error during API request:', error);
      throw error;
    }
  }
}
