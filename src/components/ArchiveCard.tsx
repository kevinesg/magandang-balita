import React from "react";
import { Link } from "react-router-dom";
import "./css/ArchiveCard.css";
import { CardProps } from "../interface/CardProps";

const formatTitleToUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const ArchiveCard: React.FC<CardProps> = ({
  title,
  long_summary,
  image_url,
  posted_at,
}: CardProps) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "600px" }}>
      <Link to={`/${formatTitleToUrl(title)}`} className="card-link">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{long_summary}</p>
              <p className="card-date">{posted_at}</p>
            </div>
          </div>
          <div className="col-md-3">
            <img
              src={image_url}
              className="img-fluid card-img-right"
              alt={image_url}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArchiveCard;
