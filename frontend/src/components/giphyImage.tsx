import type { GifType } from "../models/gif";

export const GiphyImage = ({ gif }: GiphyImageProps) => (
  <div>
    <div className="aspect-square overflow-hidden rounded shadow">
      <img
        src={gif.images.fixed_width.url}
        alt={gif.title}
        loading="lazy"
        className="object-cover w-full h-full"
      />
    </div>
    <p
      className="mt-2 text-sm text-gray-700 truncate text-center"
      title={gif.title}
    >
      {gif.title.trim().length > 0 ? gif.title.trim() : "Untitled"}
    </p>
  </div>
);

type GiphyImageProps = {
  gif: GifType;
};
