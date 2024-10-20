/// src\core\controllers\user-controller.ts

import { HttpStatusCode } from 'axios';

import { GetUserByIdResponse, STORAGE_KEYS } from 'src/common';
import { HttpClient, HttpResponse, LocalStorage } from 'src/core';

export class UserController {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async getUserById(): Promise<HttpResponse<GetUserByIdResponse>> {
    const localStorage = new LocalStorage();

    const response = await this.httpClient.request<GetUserByIdResponse>(
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
      await localStorage.set(STORAGE_KEYS.USER, response.body);
    }

    return response;
  }
}
