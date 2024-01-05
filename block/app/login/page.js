"use client";

import React, { useCallback, useState } from "react";
import styles from "./styles.css";
import axios from "axios";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);


  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoginError(false);
      console.log(id, password);
      const request = await axios
        .post(
          "http://3.39.143.99/user/login",
          {
            username: id,
            password: password,
          },
        )
        .then((res) => {
          console.log(res);
          alert("로그인이 완료되었습니다.");
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
          alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        });
    },
    [id, password]
  );

  return (
    <div className="wrapper">
      <div className="form" onSubmit={onSubmit}>
        <img
          className="background-img"
          src="https://velog.velcdn.com/images/ea_st_ring/post/21ae767a-b2c6-4992-82e3-256a143d3b7c/image.png"
        />
        <div className="input-box">
          <input
            className="input"
            type="text"
            placeholder="ID"
            value={id}
            onChange={onChangeId}
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <div className="divider"></div>
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={onChangePassword}
            style={{ borderRadius: "0px 0px 10px 10px" }}
          />
        </div>
        <button type="submit" className="submit-button" onClick={onSubmit}>
          로그인
        </button>
      </div>
    </div>
  );
}
