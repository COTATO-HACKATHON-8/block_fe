"use client";

import React from "react";
import "./styles.css";
import Link from "next/link";
import Dummy from "../dummy.json";

const header = () => {
  const token = localStorage.getItem("id");
  let authorized = false;
  const user = Dummy.user;
  console.log(user.name);
  if (token !== null) {
    authorized = true;
  }
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("id");
    alert("로그아웃 되었습니다.");
    window.location.href = "/";
  };

  return (
    <div className="header">
      <Link href="/">
        <img
          className="logo"
          src="https://velog.velcdn.com/images/ea_st_ring/post/229fbfef-adca-4b66-8802-4f354a8ab155/image.svg"
        />
      </Link>
      <div className="menu">
        <Link href="/search">
          <img
            className="search"
            src="https://velog.velcdn.com/images/ea_st_ring/post/1b5455b9-3b15-4fea-a89a-ac404b955091/image.svg"
          />
        </Link>
        {authorized ? (
          <>
            <Link href="mypage">{user.name}</Link>
            <p onClick={handleLogout}>LOGOUT</p>
          </>
        ) : (
          <>
            <Link href="/login">LOGIN</Link>
            <Link href="/signup">SIGN UP</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default header;
