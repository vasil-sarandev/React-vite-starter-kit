import { env } from '@/config';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export enum InspireAxiosRequestHeaders {
  auth = 'Authorization',
}

export const createAuthHeader = (accessToken: string) =>
  `Bearer ${accessToken}`;
export const getAccessTokenFromAuthHeader = (authorizationHeader: string) =>
  authorizationHeader.split(' ')[1];

// eslint-disable-next-line compat/compat
const abortController = new AbortController();

type ResolveCallback = (
  config?: AxiosRequestConfig,
) => PromiseLike<AxiosRequestConfig[]> | void;

const augmentHeaders = async (
  request: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const { headers } = request;
  const authorizationHeader = headers[InspireAxiosRequestHeaders.auth];

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
  return Promise.reject('TODO: error handler');
};

export const axiosInstance = axios.create({
  baseURL: env.API_URL,
});
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(
  responseSuccessHandler,
  responseErrorHandler,
);
