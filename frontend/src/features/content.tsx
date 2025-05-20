import { useFetchContent } from "../apis/useFetchContent";
import { GiphyImage, Spinner } from "../components";
import { useFetchDataOnScroll } from "../hooks/useFetchDataOnScroll";
import type { GifType } from "../models/gif";

export const Content = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useFetchContent();

  const observerRef = useFetchDataOnScroll({ hasNextPage, fetchNextPage });

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Trending GIFs</h1>

      {status === "pending" && (
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
        {isFetching && isFetchingNextPage && <Spinner />}
      </div>
    </>
  );
};
