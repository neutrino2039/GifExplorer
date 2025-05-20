import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { api } from "./api";
import { LIMIT } from "./constants";

export const useFetchContent = () =>
  useInfiniteQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const nextOffset = pages.length * LIMIT;
      return nextOffset < lastPage.pagination.total_count
        ? nextOffset
        : undefined;
    },
  });

const fetchContent = async ({ pageParam }: QueryFunctionContext) => {
  const result = await api.get(`content/?offset=${pageParam}`);
  return result.data;
};
