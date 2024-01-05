"use client";

import React, { useCallback, useState } from "react";
import styles from "./styles.css";
import axios from "axios";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [alias, setAlias] = useState("");
  const [authCode, setAuthCode] = useState("");

  const onChangeId = useCallback(
    (e) => {
      setId(e.target.value);
    },
    [id]
  );

  const onChangeName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onChangeAuthCode = useCallback(
    (e) => {
      setAuthCode(e.target.value);
    },
    [authCode]
  );

  const checkPassword = useCallback(
    (confirmPasswordInput) => {
      if (password !== confirmPasswordInput) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    },
    [password]
  );

  const onChangeConfirmPassword = useCallback(
    (e) => {
      const confirmPasswordInput = e.target.value;
      setConfirmPassword(confirmPasswordInput);
      checkPassword(confirmPasswordInput);
    },
    [password]
  );

  const onSubmit = useCallback(
    async (e) => {
      console.log(id, password, confirmPassword);
      e.preventDefault();

      if (alias === "" || alias === true) {
        console.log(alias);
        return setIdError(true);
      }

      await axios
        .post("http://3.39.143.99/user/join", {
          username: id,
          password: password,
          name: name,
        })
        .then((res) => {
          console.log(res);
          alert("회원가입이 완료되었습니다. 다시 로그인해주세요.");
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        });

      setLoginError(false);
    },
    [id, password]
  );

  return (
    <div className="signup-wrapper">
      <div className="signup-form" onSubmit={onSubmit}>
        <img
          className="signup-background-img"
          src="https://velog.velcdn.com/images/ea_st_ring/post/e6ff9326-7c09-4a80-a35c-970366ecaea5/image.svg"
        />
        <div className="signup-input-box">
          <label className="label">이메일</label>
          <div className="signup-id-box">
            <input
              className="signup-input"
              type="text"
              placeholder="ID"
              value={id}
              onChange={onChangeId}
              style={{ width: "100%", marginRight: "50px" }}
            />
            <button
              className="alias-button"
              onClick={() => {
                setAlias(false);
              }}
            >
              중복 확인
            </button>
          </div>
          {idError && <div className="error-text">* 중복 확인을 해주세요.</div>}
          {alias === false && (
            <div className="success-text">* 사용 가능한 이메일입니다.</div>
          )}
          <label className="label">이름</label>
          <input
            className="signup-input"
            type="text"
            placeholder="이름"
            value={name}
            onChange={onChangeName}
          />

          <label className="label">비밀번호</label>
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={onChangePassword}
          />
          <label className="label">비밀번호 재확인</label>
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
          {passwordError ? (
            <div className="error-text">비밀번호가 일치하지 않습니다.</div>
          ) : (
            <div className="error-text"></div>
          )}
        </div>
        <button
          type="submit"
          className="signup-submit-button"
          onClick={onSubmit}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
