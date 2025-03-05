import React from "react";
import { Link } from "react-router-dom";
import "./css/Card.css";
import { CardProps } from "../interface/CardProps";

const formatTitleToUrl = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
};

const Card: React.FC<CardProps> = ({
  title,
  long_summary,
  image_url,
  posted_at,
}) => {
  return (
    <div className="card">
      <Link to={`/${formatTitleToUrl(title)}`} className="card-link">
        <img src={image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-preview">{long_summary}</p>
          <p className="card-date">{posted_at}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
