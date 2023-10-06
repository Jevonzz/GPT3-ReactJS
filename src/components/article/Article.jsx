import React from "react";
import "./article.css";

const Article = ({ imgURL, date, title }) => {
  return (
    <div className="gpt3__blog-container_articles">
      <div className="gpt3__blog-container_articles-img">
        <img src={imgURL} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_articles-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
