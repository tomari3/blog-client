import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { TagsBar } from "../Tags/TagsBar";
import { PostGallery } from "../Post/Post";

function Main({ authData }) {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTags(data.tags);
        setPosts(data.posts);
      });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="home">
      <section className="home_tags-bar-wrapper">
        <TagsBar tags={tags} />
      </section>
      <section className="home_posts">
        <PostGallery posts={posts} authData={authData} />
      </section>
    </main>
  );
}

export default Main;
