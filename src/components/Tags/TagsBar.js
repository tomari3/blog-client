import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ tag }) => {
  return (
    <div className="tags-bar">
      <Link to="/tags/1">{tag}</Link>
    </div>
  );
};

export const TagsBar = ({ tags }) => {
  return tags.map((i, tag) => {
    return <Tag key={i} tag={tag} />;
  });
};
