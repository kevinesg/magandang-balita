import React from "react";
import ArchiveCard from "../components/ArchiveCard";
import "./css/Archive.css";
import content from "../../data/content.json";

const Archive: React.FC = () => {
  const sortedContent = [...content].sort(
    (a, b) => new Date(b.posted_at).getTime() - new Date(a.posted_at).getTime()
  );

  return (
    <div className="archive-container">
      {sortedContent.map((data) => (
        <div className="col" key={data.url}>
          <ArchiveCard
            url={data.url}
            title={data.title}
            image_url={data.image_url || ""}
            short_summary={data.short_summary}
            long_summary={data.long_summary}
            author={data.author}
            source={data.source}
            posted_at={data.posted_at}
          />
        </div>
      ))}
    </div>
  );
};

export default Archive;
