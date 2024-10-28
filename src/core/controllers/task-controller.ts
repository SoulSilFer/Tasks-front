/// src\core\controllers\task-controller.ts

import { GetTaskByDateResponse, GetTaskByDateType } from 'src/common';
import { HttpClient, HttpResponse } from 'src/core';
import { paramBuilder } from 'src/utils';

export class TaskController {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async getTaskByDate(
    params: GetTaskByDateType
  ): Promise<HttpResponse<GetTaskByDateResponse>> {
    const { selectedDate, show, organizationId } = params;

    const response = await this.httpClient.request<GetTaskByDateResponse>(
      {
        url: this.url + paramBuilder({ selectedDate, organizationId, show }),
        method: 'get',
      },
      false
    );

    return response;
  }
}
