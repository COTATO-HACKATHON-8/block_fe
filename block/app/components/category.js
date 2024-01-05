import React from "react";
import "./styles.css";

const category = (props) => {
  const setCategory = props.handleSetCategory;
  const categories = [
    "전체",
    "운동",
    "여행",
    "영화",
    "독서",
    "공연",
    "사진",
    "음악",
    "악기",
    "음식",
    "DIY",
    "공부",
    "게임",
    "예술",
    "수집",
    "기타",
  ];
  return (
    <div className="category-wrapper">
      {categories.map((category) => (
        <div
          className="category-box"
          onClick={() => {
            setCategory(category);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default category;
