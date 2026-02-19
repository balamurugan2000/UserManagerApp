export interface IApiResponse<T = any> {
  data: T;
  status: number;
  [key: string]: any;
}

export interface FetchUsersParams {
  page?: number;
  limit?: number;
  search?: string;
}
