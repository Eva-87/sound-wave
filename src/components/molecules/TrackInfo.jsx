import TextMuted from "../atoms/TextMuted";

export default function TrackInfo({ title, artist }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium truncate">{title}</span>
      <TextMuted>{artist}</TextMuted>
    </div>
  );
}
