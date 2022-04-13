import React from "react";
import { Link } from "react-router-dom";

import TagsBar from "../Tags/TagsBar";

function Main({ logo }) {
  return (
    <main className="home">
      <h1>Home</h1>
      <section>
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
