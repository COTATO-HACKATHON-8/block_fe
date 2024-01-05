"use client";
import React, { useState } from "react";
import "./styles.css";
import Modal from "./modal";

const block = (props) => {
  const { author, title, content, category } = props;
  const handleModal = () => {
    props.setSelectedBlock(props.block);
    props.handleModalOpen();
  };
  return (
    <div className="frame" onClick={handleModal}>
      <div className="up">{/* 배경 이미지 */}</div>
      <div className="down">
        <div className="text-box">
          <h3 className="block-title">
            {title.length < 20 ? title : title.slice(0, 20) + "..."}
          </h3>
          <p className="block-content">
            {content.length < 55 ? content : content.slice(0, 55) + "..."}
          </p>
        </div>
        <div className="block-info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="block-profile-img"
              src="https://velog.velcdn.com/images/ea_st_ring/profile/d4858ab6-c45e-43fd-9787-e94fed1f5862/image.jpg"
            />
            <p>by </p> &nbsp;
            <span className="block-id">{author}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="like-img"
              src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg"
            />
            <span className="like-count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default block;
