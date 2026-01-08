import ArrowIcon from "../atoms/ArrowIcon";

export default function RankIndicator({ rank, trend }) {
  return (
    <div className="flex items-center gap-2 w-16">
      <span className="text-lg font-semibold">{rank}</span>
      <ArrowIcon direction={trend} />
    </div>
  );
}
