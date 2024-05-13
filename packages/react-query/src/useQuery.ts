'use client'
import { QueryObserver } from '@tanstack/query-core'
import { useBaseQuery } from './useBaseQuery'
import type { DefaultError, QueryClient, QueryKey } from '@tanstack/query-core'
import type {
  DefinedUseQueryResult,
  UseQueryOptions,
  UseQueryResult,
} from './types'

export function useQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TInitialData = unknown,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
    initialData?: TInitialData
  },
  queryClient?: QueryClient,
): TInitialData extends TQueryFnData | (() => TQueryFnData)
  ? DefinedUseQueryResult<TData, TError>
  : UseQueryResult<TData, TError> {
  return useBaseQuery(options, QueryObserver, queryClient) as any
}
