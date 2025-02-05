import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useQuery as useQueryRN } from '@tanstack/react-query';

import { UseQueryParams } from '@/types/reactQuery';

export const useQuery = <TData, TError>({
  queryKey,
  queryFn,
  onError,
  options,
}: UseQueryParams<TData, TError>) => {
  const query = useQueryRN({ queryKey, queryFn, ...options });

  useEffect(() => {
    if (query.isError) {
      const error = query.error as AxiosError;
      onError?.(error);
    }
  }, [query.isError, query.error, onError]);

  return query;
};
