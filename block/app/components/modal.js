"use client";

import React, { useState } from "react";
import "./styles.css";

const modal = (props) => {
  const { author, title, content, category } = props.selectedBlock;
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLike(like - 1);
      setIsLiked(false);
    } else {
      setLike(like + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="modal-container" onClick={props.handleModalClose}>
      <div className="modal-wrapper" onClick={stopPropagation}>
        <label className="modal-category">{category}</label>
        <img className="modal-img" src={props.selectedBlock.imageUrl} />
        <div className="modal-info">
          <div className="modal-top">
            <p className="modal-title">{title}</p>
            <div style={{ display: "flex", alignItems: "center" }}>

              {isLiked ? (
                <img
                  className="modal-like"
                  src="https://velog.velcdn.com/images/ea_st_ring/post/4fddf0d6-e316-42e2-b925-284418fe3666/image.svg"
                  onClick={handleLike}
                />
              ) : (
                <img
                  className="modal-like"
                  src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg"
                  onClick={handleLike}
                />
              )}
              <p className="modal-like-count">{like}</p>
            </div>
          </div>
          <p className="modal-content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default modal;
