import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

type queryOptions<TData, TError> = Omit<
  UseQueryOptions<TData, TError>,
  'queryKey' | 'queryFn'
>;

type mutationOptions<TData, TError, TVariables, TContext> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationFn'
>;

export type UseQueryParams<TData, TError> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<TData>;
  onError?: (error: AxiosError) => void;
  options?: queryOptions<TData, TError>;
};

export type UseMutationParams<TData, TError, TVariables, TContext> = {
  mutationFn: MutationFunction<TData, TVariables>;
  options?: mutationOptions<TData, TError, TVariables, TContext>;
  onError?: (error: AxiosError) => void;
  showModalError?: (error: AxiosError) => boolean;
};
