/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosRequestHeaders, ResponseType } from 'axios';

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch';

export type HttpRequest<T = any> = {
  responseType?: ResponseType;
  url: string;
  method: HttpMethod;
  body?: T;
  headers?: AxiosRequestHeaders;
  params?: Record<string, any>;
};

export interface HttpResponse<T = any> {
  statusCode: number;
  body?: T;
}

export interface HttpClient {
  request: <R = any>(
    data: HttpRequest,
    unauthorized?: boolean
  ) => Promise<HttpResponse<R>>;
}
