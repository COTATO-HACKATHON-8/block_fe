"use client";

import React, { useEffect, useState } from "react";
import Block from "./block";
import Dummy from "@/app/dummy.json";
import Category from "./category";
import Modal from "./modal";
import axios from "axios";

const main = () => {
  const blocks = Dummy.data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [category, setCategory] = useState("전체");

  const res = axios.get("http://3.39.143.99/blocks").then((res) => {
    console.log(res);
  });

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOpen = () => {
    setSelectedBlock;
    setIsModalOpen(true);
  };
  const handleSetCategory = (category) => {
    setCategory(category);
  };
  return (
    <>
      <Category handleSetCategory={handleSetCategory} />
      <div className="wrapper">
        <div className="block-grid">
          {/* category가 전체인 경우에는 전부 불러옴 */}
          {blocks.filter(
            (block) => category === "전체" || block.category === category
          ).length > 0 ? (
            blocks
              .filter(
                (block) => category === "전체" || block.category === category
              )
              .map((block) => (
                <Block
                  key={block.id}
                  author={block.author}
                  title={block.title}
                  content={block.content}
                  category={block.category}
                  block={block}
                  onClick={() => setSelectedBlock(block)}
                  handleModalOpen={handleModalOpen}
                  setSelectedBlock={setSelectedBlock}
                  handleModalClose={handleModalClose}
                />
              ))
          ) : (
            <p className="no-block-text">아직 블록이 없어요!</p>
          )}
        </div>
        {isModalOpen && (
          <Modal
            selectedBlock={selectedBlock}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
};

export default main;
