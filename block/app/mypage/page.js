"use client";

import React, { useState } from "react";
import Block from "../components/block";
import Modal from "../components/modal";
import Dummy from "../dummy.json";
import "./styles.css";

const mypage = () => {
  const blocks = Dummy.data;
  // author가 동일한 blocks만 불러옴
  const my_blocks = Dummy.data.filter((block) => block.author === "Tesla");
  // category별로 블록 개수를 세어서 sample에 저장
  const my_sample = my_blocks.reduce((acc, cur) => {
    if (acc[cur.category]) {
      acc[cur.category] += 1;
    } else {
      acc[cur.category] = 1;
    }
    return acc;
  }, {});
  console.log(my_sample);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const sample = { 운동: 1, 공부: 4, 취미: 2, 기타: 4 };
  const colors = [
    "#F9CFAE",
    "#F5A69F",
    "#A7DDCC",
    "#DAEAC0",
    "#495057",
    "#343a40",
    "#212529",
  ];
  var samples = Object.keys(my_sample);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOpen = () => {
    setSelectedBlock;
    setIsModalOpen(true);
  };
  return (
    <div className="wrapper">
      <div className="profile-box">
        <div className="left">
          <img
            className="profile-image"
            src="https://velog.velcdn.com/images/ea_st_ring/profile/d4858ab6-c45e-43fd-9787-e94fed1f5862/image.jpg"
          />
          <div className="profile-name">
            <p>Tesla</p>
          </div>
        </div>
        <div className="right">
          <p>프로필 수정</p>
        </div>
      </div>

      <div className="status-box">
        <div className="status">
          {samples.map((key, index) => {
            // 조건에 따라 스타일 객체를 생성하는 함수
            const getStyle = () => {
              let style = {
                width: `${my_sample[key] * 50}%`,
                backgroundColor: colors[index],
                height: "40px",
                textAlgign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              };

              if (index === 0) {
                style.borderRadius = "10px 0 0 10px";
              } else if (index === samples.length - 1) {
                style.borderRadius = "0 10px 10px 0";
              }

              return style;
            };

            return (
              <div className="status-item" style={getStyle()}>
                <div className="status-title">{key}</div>
              </div>
            );
          })}
        </div>
        <div className="divider" />
      </div>
      <div className="block-box">
        <div className="write">
          <img
            className="write-icon"
            src="https://velog.velcdn.com/images/ea_st_ring/post/da68283f-0f30-46d2-8d65-256f3e77d233/image.svg"
          ></img>
          글쓰기
        </div>
        <div className="block-grid">
          {my_blocks.map((block) => (
            <Block
              key={block.id}
              author={block.author}
              title={block.title}
              content={block.content}
              category={block.category}
              profileImageUrl="https://velog.velcdn.com/images/ea_st_ring/profile/d4858ab6-c45e-43fd-9787-e94fed1f5862/image.jpg"
              block={block}
              onClick={() => setSelectedBlock(block)}
              handleModalOpen={handleModalOpen}
              setSelectedBlock={setSelectedBlock}
              handleModalClose={handleModalClose}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          selectedBlock={selectedBlock}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default mypage;
