import { AxiosError } from 'axios';
import { useMutation as useMutationRN } from '@tanstack/react-query';

import { UseMutationParams } from '@/types/reactQuery';

export const useMutation = <TData, TError, TVariables, TContext>({
  mutationFn,
  options,
  onError,
}: UseMutationParams<TData, TError, TVariables, TContext>) => {
  const mutation = useMutationRN<TData, TError, TVariables, TContext>({
    mutationFn,
    onError: (err) => {
      const error = err as AxiosError;
      onError?.(error);
    },
    ...options,
  });

  return mutation;
};
