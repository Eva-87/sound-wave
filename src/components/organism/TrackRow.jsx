import RankIndicator from "../molecules/RankIndicator";
import CoverImage from "../atoms/CoverImage";
import TrackInfo from "../molecules/TrackInfo";
import StreamsCount from "../molecules/StreamsCount";
import ContextMenu from "../molecules/ContextMenu";
import Button from "../atoms/Button";


export default function TrackRow({ index, track }) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-900/60 rounded-lg transition">
      <RankIndicator rank={index + 1} trend={track.trend} />

      <CoverImage src={track.albumCover} alt={track.title} />

      <div className="flex-1 min-w-0">
        <TrackInfo title={track.title} artist={track.artist} />
      </div>

      <div className="hidden md:flex md:w-32 md:justify-end">
        <StreamsCount streams={track.streams} />
      </div>

      <Button
        text="Play"
        className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-700 text-sm"
      />

      <ContextMenu />
    </div>
  );
}
