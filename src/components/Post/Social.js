import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DateTime } from "luxon";

export const SocialIcon = ({ icon }) => {
  return (
    <div className="social-icons-row_icon">
      <Link to={"/share"}>S</Link>
    </div>
  );
};

export const SocialIconRow = ({ iconsArr }) => {
  return (
    <div className="social-icons-row">
      {iconsArr.map((icon, i) => {
        return <SocialIcon key={i} icon={""} />;
      })}
    </div>
  );
};

export const CommentForm = ({ func, val, set }) => {
  return (
    <div className="comments_form-wrapper">
      <form onSubmit={func} className="comments_form">
        <input
          type="text"
          name="comment"
          id="comment"
          value={val}
          onChange={(e) => set(e.target.value)}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

const Comment = ({ comment, func }) => {
  const date = DateTime.fromISO(comment.date).toRelative(Date.now);

  return (
    <div className="comments-section_comments_comment">
      <p className="comment-date">{date}</p>
      <p className="comment-content">{comment.content}</p>
      <p className="comment-likes">{comment.likes.length}</p>
      <p className="comment-reply" onClick={func}></p>
    </div>
  );
};

export const CommentSection = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await fetch(
        `http://localhost:3000/post/${post._id}/comment`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: post._id,
            comment: comment,
          }),
        }
      );
      const resJson = await res.json();
      if (res.status === 200) {
        setComments(resJson);
        setComment("");
      } else {
        console.log(resJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const commentPost = () => {
    setOpen(!open);
  };
  return (
    <div className={`interactions-row_btn comment ${open ? open : ""}`}>
      <div className="interactions-row_btn_info">
        <span>{comments.length}</span>{" "}
        <p onClick={commentPost}>
          {comments.length === 1 ? "comment" : "comments"}
        </p>
      </div>
      {open ? (
        <section className="comments-section">
          <div className="comments-section_comments">
            {comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </div>
          <CommentForm func={handleSubmit} val={comment} set={setComment} />
        </section>
      ) : null}
    </div>
  );
};

export const Like = ({ post, authData }) => {
  const [likes, setLikes] = useState(post.likes);
  const [visible, setVisible] = useState(false);

  const likePost = async (e) => {
    if (!authData) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
      return;
    }

    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/post/${post._id}/like`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postID: post._id,
          userID: authData.user.id,
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setLikes(resJson);
        console.log(resJson);
      } else {
        console.log("unauthorized");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="interactions-row_btn" onClick={likePost}>
      <p>
        <span>{likes.length}</span> likes
      </p>
      {visible ? (
        <ErrorPrompt place="like" msg="you are not logged in" />
      ) : null}
    </div>
  );
};

export const Save = ({ post, authData }) => {
  const [saves, setSaves] = useState(post.saves);
  const [visible, setVisible] = useState(false);

  const savePost = async (e) => {
    if (!authData) {
      setVisible(true);
      setTimeout(() => setVisible(false), 2000);
      return;
    }
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/post/${post._id}/save`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postID: post._id,
          userID: authData.user.id || "",
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setSaves(resJson);
      } else {
        console.log("unauthorized");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="interactions-row_btn" onClick={savePost}>
      <p>
        <span>{saves.length}</span> saves
      </p>
      {visible ? (
        <ErrorPrompt place="save" msg="you are not logged in" />
      ) : null}
    </div>
  );
};

const ErrorPrompt = ({ place, msg }) => {
  return (
    <div className={`line-error-prompt ${place}`}>
      <span></span>
      <p>{msg}</p>
      <span></span>
    </div>
  );
};

export const InteractionsRow = ({ post, authData }) => {
  return (
    <div className="interactions-row">
      <Like post={post} authData={authData} />
      <Save post={post} authData={authData} />
      <CommentSection post={post} />
    </div>
  );
};
