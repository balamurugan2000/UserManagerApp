import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../utils/Config';

interface IApiResponse<T = any> {
  data: T;
  status: number;
  [key: string]: any;
  message: string;
}

export const getAPICall = async <T = any,>(
  endpoint: string, // API endpoint
  params?: Record<string, any>, // Optional query parameters
): Promise<IApiResponse<T>> => {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response: AxiosResponse<T> = await axios.get(url, {
      params,
    });
    return {
      data: response?.data,
      status: response.status,
      message: 'success',
    };
  } catch (error: any) {
    throw {
      data: error.response?.data,
      status: error.response?.status || 500,
      message: error.message || 'Something went wrong',
    };
  }
};
