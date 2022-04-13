import React from "react";
import { Link } from "react-router-dom";

import TagsBar from "../Tags/TagsBar";

function Main() {
  return (
    <main className="home">
      <section className="home_tags-bar-wrapper">
        <TagsBar />
      </section>
      <section>
        <div>
          <Link to="/posts">All Posts</Link>
        </div>
        <div>
          <Link to="/posts/1">A Post</Link>
        </div>
        <div>
          <Link to="/posts/2">A Post</Link>
        </div>
        <div>
          <Link to="/posts/3">A Post</Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
