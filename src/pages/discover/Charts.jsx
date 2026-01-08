import React from "react";
import TopCarousel from "../../components/organism/TopCarousel";
import WeeklyTopSongsGlobal from "../../components/organism/WeeklyTopSongsGlobal";

export default function Charts() {
  return (
    <section className="text-white p-10">
      <h1 className="text-3xl font-poppins">Charts</h1>
      <p className="opacity-80 mt-2">Top trending music charts.</p>

      <div className="mt-8">
        <TopCarousel />
      </div>

      <WeeklyTopSongsGlobal />
    </section>
  );
}
