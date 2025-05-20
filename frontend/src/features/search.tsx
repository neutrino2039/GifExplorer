import { useState } from "react";
import { queryClient } from "../apis/queryClient";
import { useSearch } from "../apis/useSearch";
import { GiphyImage, Spinner } from "../components";
import { useFetchDataOnScroll } from "../hooks/useFetchDataOnScroll";
import type { GifType } from "../models/gif";

export const Search = () => {
  const [text, setText] = useState<string>("");
  const [enabled, setEnabled] = useState(false);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useSearch(text, enabled);

  const observerRef = useFetchDataOnScroll({ hasNextPage, fetchNextPage });

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnabled(false);

    const trimmed = text?.trim();
    if (!trimmed) return;

    setEnabled(true);

    await queryClient.resetQueries({
      queryKey: ["search"],
      exact: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search GIFs..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-300 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {enabled && status === "pending" && (
        <div className="flex justify-center items-center h-32">
          <Spinner />
        </div>
      )}

      {status === "error" && <p>Error: {error.message}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data?.pages.map((page) =>
          page.data.map((gif: GifType) => <GiphyImage key={gif.id} gif={gif} />)
        )}
      </div>

      <div
        ref={observerRef}
        className="h-20 mt-6 flex justify-center items-center"
      >
        {enabled && isFetching && isFetchingNextPage && <Spinner />}
      </div>
    </>
  );
};
