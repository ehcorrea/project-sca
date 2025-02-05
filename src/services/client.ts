import axios, { AxiosRequestConfig } from 'axios';

const defaultOptions: AxiosRequestConfig = {
  baseURL: process.env.EXPO_PUBLIC_API_URL,
};

export const setHeaderAuthorization = (jwt: string) => {
  client.defaults.headers.common.Authorization = `bearer ${jwt}`;
};

export const client = axios.create(defaultOptions);
