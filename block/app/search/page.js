'use client';

import React from "react";
import Category from "../components/category";
import "./styles.css";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-input">
        <img className="search-icon" src="https://velog.velcdn.com/images/ea_st_ring/post/1b5455b9-3b15-4fea-a89a-ac404b955091/image.svg" />
        <input placeholder="검색어를 입력하세요" />
      </div>
      <Category />
    </div>
  );
};

export default Search;
