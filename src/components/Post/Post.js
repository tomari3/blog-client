import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TagsBar } from "../Tags/TagsBar";
import { SocialIconRow, InteractionsRow } from "./Social";

const AuthorPicture = () => {
  return (
    <div className="post_author-detail_image">
      <img src="" alt="" />
      <p>IMG</p>
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
      <section className="post_bar-wrapper">
        <TagsBar tags={post.tags} />
      </section>
      <PostContent content={post.content} />
      <SocialIconRow iconsArr={["", "", ""]} />
      <InteractionsRow post={post} />
    </article>
  );
}

export const PostForm = ({ tag }) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/post/new", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          header: header,
          content: content,
          tags: tags,
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setHeader("");
        setContent("");
        setTags("");
      } else {
        console.log(resJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="header">header</label>
          <input
            type="text"
            name="header"
            id="header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="content">content</label>
          <textarea
            type="content"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="tags">tags</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button type="submit" className="form-submit">
          post
        </button>
      </form>
    </div>
  );
};

export const PostFormPage = ({ tags }) => {
  return (
    <main className="sign-page">
      <div className="sign-page_header">
        <h1>create your account and start saving, liking and commenting!</h1>
      </div>
      <PostForm />
      <span className="suggest-login">
        have an account?{" "}
        <Link className="underline" to="/settings/login">
          login
        </Link>
      </span>
    </main>
  );
};

export const PostGallery = ({ posts }) => {
  return posts.map((post) => {
    return <Post key={post._id} post={post} />;
  });
};

export default Post;
