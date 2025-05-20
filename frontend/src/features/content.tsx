import { useFetchContent } from "../apis/useFetchContent";
import { Spinner } from "../components";
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
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending GIFs</h1>

      {status === "pending" && (
        <div className="flex justify-center items-center h-32">
          <Spinner />
        </div>
      )}

      {status === "error" && <p>Error: {error.message}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data?.pages.map((page) =>
          page.data.map((gif: GifType) => (
            <div
              key={gif.id}
              className="aspect-square overflow-hidden rounded shadow"
            >
              <img
                key={gif.id}
                src={gif.images.fixed_width.url}
                alt={gif.title}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </div>
          ))
        )}
      </div>

      <div
        ref={observerRef}
        className="h-20 mt-6 flex justify-center items-center"
      >
        {isFetching && isFetchingNextPage && <Spinner />}
      </div>
    </div>
  );
};
