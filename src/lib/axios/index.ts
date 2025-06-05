import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { env } from '@/config';

export enum IAppRequestHeaders {
  auth = 'Authorization',
}

export const createAuthHeader = (accessToken: string) => `Bearer ${accessToken}`;
export const getAccessTokenFromAuthHeader = (authorizationHeader: string) =>
  authorizationHeader.split(' ')[1];

const abortController = new AbortController();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ResolveCallback = (config?: AxiosRequestConfig) => PromiseLike<AxiosRequestConfig[]> | void;

const augmentHeaders = async (
  request: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const { headers } = request;

  // TODO: implement check if accessToken is expired here.

  return {
    ...request,
    signal: abortController.signal,
    headers,
  };
};

const requestInterceptor = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const nextConfig = await augmentHeaders(config);

  return nextConfig;
};

const responseSuccessHandler = (res: AxiosResponse) => {
  return res.data;
};

const responseErrorHandler = (err: AxiosError) => {
  // TODO: implement error handling here.
  return Promise.reject(err);
};

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
});
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseSuccessHandler, responseErrorHandler);
