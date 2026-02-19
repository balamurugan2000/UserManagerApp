import apiEndpoints from './api.endpoints';
import { getAPICall } from './api.service';

export const fetchUsers = async (page: number) => {
  return getAPICall(apiEndpoints.userList);
};

export const fetchUsersId = async (id: number) => {
  return getAPICall(apiEndpoints.userList, { id });
};
