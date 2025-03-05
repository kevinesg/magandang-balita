import React from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Article.css";
import { CardProps } from "../interface/CardProps";
import content from "../../data/content.json";

// Utility function to convert title to URL-friendly format
const formatTitleToUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const Article: React.FC = () => {
  const { article } = useParams<{ article: string }>();

  const articleData = content.find(
    (data: CardProps) => formatTitleToUrl(data.title) === article
  );

  if (!articleData) {
    return <div>Article not found</div>;
  }

  const currentIndex = content.findIndex(
    (data: CardProps) => formatTitleToUrl(data.title) === article
  );
  const previousArticle = currentIndex > 0 ? content[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < content.length - 1 ? content[currentIndex + 1] : null;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card article-card">
            <div className="card-body">
              <div className="article-header">
                <h1 className="mb-4">{articleData.title}</h1>
                <p className="text-muted">Posted on: {articleData.posted_at}</p>
              </div>
              <img
                src={articleData.image_url || ""}
                className="img-fluid mb-4 article-img"
                alt={articleData.title}
              />
              <p className="image-source">📷 Source: {articleData.source}</p>
              <div className="article-content">
                <div className="article-text">
                  {articleData.long_summary.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <p className="article-reference">
                  🔗 Reference:{" "}
                  <a
                    href={articleData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ✍️ written by {articleData.author}
                  </a>
                </p>
              </div>
              <div className="navigation-links">
                {previousArticle && (
                  <Link
                    to={`/${formatTitleToUrl(previousArticle.title)}`}
                    className="btn previous"
                  >
                    Previous
                  </Link>
                )}
                {nextArticle && (
                  <Link
                    to={`/${formatTitleToUrl(nextArticle.title)}`}
                    className="btn next"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
