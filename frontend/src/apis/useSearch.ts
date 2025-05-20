import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { api } from "./api";
import { LIMIT } from "./constants";

export const useSearch = (text: string, enabled: boolean) =>
  useInfiniteQuery({
    queryKey: ["search"],
    queryFn: search(text),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = pages.length * LIMIT;
      return nextOffset < lastPage.pagination.total_count
        ? nextOffset
        : undefined;
    },
    enabled,
  });

const search =
  (text: string) =>
  async ({ pageParam }: QueryFunctionContext) => {
    const result = await api.get(
      `search/?offset=${pageParam}&limit=${LIMIT}&q=${text}`
    );
    return result.data;
  };
