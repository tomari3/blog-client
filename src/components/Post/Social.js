import React from "react";
import { Link } from "react-router-dom";

export const SocialIcon = ({ icon }) => {
  return (
    <div className="social-icons-row_icon">
      <Link to={"/share"}>icon</Link>
    </div>
  );
};

export const SocialIconRow = ({ iconsArr }) => {
  return (
    <div className="social-icons-row">
      {iconsArr.map((icon, i) => {
        return <SocialIcon key={i} icon={icon} />;
      })}
    </div>
  );
};

export const Comment = () => {
  return (
    <div className="interactions-row_btn">
      <Link to={"comment"}>Comment</Link>
    </div>
  );
};

export const InteractionsRow = () => {
  return (
    <div className="interactions-row">
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
