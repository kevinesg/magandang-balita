import React from "react";
import { Link } from "react-router-dom";
import "./css/LatestArticle.css";
import content from "../../data/content.json";

const formatTitleToUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const LatestArticle: React.FC = () => {
  // Find the article with the maximum id
  const latestArticle = content.reduce(
    (min, article) => (article.posted_at > min.posted_at ? article : min),
    content[0]
  );

  return (
    <div className="latest-article">
      <img
        src={latestArticle.image_url || ""} // Provide a blank string if image_url is null
        alt={latestArticle.title}
        className="latest-article-img"
      />
      <div className="latest-article-content">
        <h2>{latestArticle.title}</h2>
        <p>{latestArticle.long_summary}</p>
        <div className="gradient-overlay"></div>
        <Link
          to={`/${formatTitleToUrl(latestArticle.title)}`}
          className="btn read-more-btn"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default LatestArticle;
