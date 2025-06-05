import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useLocation } from 'react-router';

type UseQueryParamsStateReturnType<T> = [T, Dispatch<SetStateAction<T>>];

export const getQueryParamFromUrl = <T>({
  paramKey,
  defaultValue,
}: {
  paramKey: string;
  defaultValue: T;
}): T => {
  if (typeof window === 'undefined') return defaultValue;

  // Parse query parameter value from the URL
  const { search } = window.location;
  const searchParams = new URLSearchParams(search);
  const paramValue = searchParams.get(paramKey);

  return paramValue !== null ? (JSON.parse(paramValue) as T) : defaultValue;
};

export const setQueryParamInUrl = <T>({ paramKey, value }: { paramKey: string; value: T }) => {
  const currentSearchParams = new URLSearchParams(window.location.search);

  // Update the query parameter with the current state value
  if (value !== null && value !== '') {
    currentSearchParams.set(paramKey, JSON.stringify(value));
  } else {
    // Remove the query parameter if the value is null or empty
    currentSearchParams.delete(paramKey);
  }

  // Update the URL with the modified search parameters
  const newUrl = [window.location.pathname, currentSearchParams.toString()].join('?');

  // Update the browser's history without triggering a page reload
  window.history.replaceState(window.history.state, '', newUrl);
};

export const useQueryParamsState = <T>(
  param: string,
  initialState: T,
): UseQueryParamsStateReturnType<T> => {
  const location = useLocation();

  // State for managing the value derived from the query parameter
  const [value, setValue] = useState<T>(
    getQueryParamFromUrl({ paramKey: param, defaultValue: initialState }),
  );

  useEffect(() => {
    setQueryParamInUrl<T>({ paramKey: param, value });
  }, [param, value, location.pathname]);

  return [value, setValue];
};
