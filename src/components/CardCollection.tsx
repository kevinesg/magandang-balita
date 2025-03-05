import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./css/CardCollection.css";
import content from "../../data/content.json";

const CardCollection: React.FC = () => {
  const recentContent = content.slice(-10, -1).reverse();

  return (
    <>
      <div className="container text-left">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {recentContent.map((data) => (
            <div className="col" key={data.url}>
              <Card
                url={data.url}
                title={data.title}
                image_url={data.image_url || ""} // Provide a blank string if image_url is null
                short_summary={data.short_summary}
                long_summary={data.long_summary}
                author={data.author}
                source={data.source}
                posted_at={data.posted_at}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/archive" className="btn see-more-btn">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default CardCollection;
