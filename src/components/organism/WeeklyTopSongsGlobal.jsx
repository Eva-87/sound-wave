import { weeklyTopSongs } from "../data/weeklyTopSongs";
import TrackRow from "./TrackRow";

export default function WeeklyTopSongsGlobal() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">Weekly Top Songs – Global</h2>
      <p className="text-gray-400 text-sm">The most streamed songs worldwide this week.</p>

      <div className="mt-4 space-y-2">
        {weeklyTopSongs.map((track, index) => (
          <TrackRow key={track.id} index={index} track={track} />
        ))}
      </div>
    </section>
  );
}
