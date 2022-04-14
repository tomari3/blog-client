import React from "react";

import { TagsBar } from "../Tags/TagsBar";
import { SocialIconRow, InteractionsRow } from "./Social";

const AuthorPicture = () => {
  return (
    <div className="post_author-detail_image">
      <img src="" alt="" />
      IMG
    </div>
  );
};

const AuthorHeaders = () => {
  return (
    <div className="post_author-detail_header">
      <h1>Name</h1>
      <p>Date</p>
    </div>
  );
};

const AuthorDetails = () => {
  return (
    <div className="post_author-detail">
      <AuthorPicture />
      <AuthorHeaders />
    </div>
  );
};

const PostTitle = ({ title }) => {
  return (
    <div className="post_title">
      <h1>{title}</h1>
    </div>
  );
};

const PostContent = ({ content }) => {
  return (
    <div className="post_content">
      <p>{content}</p>
    </div>
  );
};

function Post({ post }) {
  return (
    <article className="post">
      <AuthorDetails />
      <PostTitle title={post.header} />
      <TagsBar tags={post.tags} />
      <PostContent content={post.content} />
      <SocialIconRow iconsArr={["icon", "icon", "icon"]} />
      <InteractionsRow />
    </article>
  );
}

export const PostGallery = ({ posts }) => {
  return posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
};

export default Post;
