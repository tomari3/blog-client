import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PostSquares } from "../Post/Post";

const SpecificTag = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/tag/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <section className="tag_posts">
          <PostSquares posts={data} />
          <PostSquares posts={data} />
          <PostSquares posts={data} />
          <PostSquares posts={data} />
        </section>
      )}
    </>
  );
};

export default SpecificTag;
