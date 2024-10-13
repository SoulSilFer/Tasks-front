export interface DefaultApiError {
  statusCode: number;
  timestamp: string;
  path: string;
  message: string | string[];
  error: 'Unauthorized' | 'Bad Request' | 'Not Found';
}
