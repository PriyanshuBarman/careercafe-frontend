"use client";

import { useState } from "react";

import { ANALYST_TRACKS, type TrackId } from "@/constants/analyst-tracks";
import AboutCard from "./about-card";
import DetailCard from "./detail-card";
import FilterButtons from "./filter-buttons";

export default function AnalystTracksView() {
  const [selectedRoleId, setSelectedRoleId] = useState<TrackId>("business");

  const activeRole = ANALYST_TRACKS[selectedRoleId] ?? ANALYST_TRACKS.business;

  return (
    <div>
      <FilterButtons
        selectedRoleId={selectedRoleId}
        onSelectRole={setSelectedRoleId}
      />

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 md:flex-row">
        <DetailCard activeRole={activeRole} />
        <AboutCard activeRole={activeRole} />
      </div>
    </div>
  );
}
