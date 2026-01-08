export default function CoverImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 border border-red-500"
    />
  );
}
