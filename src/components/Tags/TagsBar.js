import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ tag }) => {
  return (
    <div className="tags-bar">
      <Link to={`/tag/${tag ? tag.name : ""}`}>{tag ? tag.name : ""}</Link>
    </div>
  );
};

export const TagsBar = ({ tags }) => {
  return tags.map((tag) => {
    return <Tag key={tag._id} tag={tag} />;
  });
};
