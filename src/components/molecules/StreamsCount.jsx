import TextMuted from "../atoms/TextMuted";

function formatStreams(streams) {
  if (streams >= 1_000_000) return `${(streams / 1_000_000).toFixed(1)}M`;
  if (streams >= 1_000) return `${(streams / 1_000).toFixed(1)}K`;
  return streams.toString();
}

export default function StreamsCount({ streams }) {
  return <TextMuted>{formatStreams(streams)} streams</TextMuted>;
}
