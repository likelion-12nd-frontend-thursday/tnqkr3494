import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Box = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  border: 0.1px solid;
  p {
    text-align: center;
    margin-bottom: 4rem;
  }
`;

const CheckWrapper = styled.div`
  display: flex;
  width: 30rem;
  justify-content: center;
  margin-bottom: 1rem;
  span {
    font-size: 3rem;
    color: #02c75a;
    font-weight: 900;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  border-radius: 20px;

  input,
  select {
    border: 0.1px solid;
    padding: 15px;
  }
`;

const ButtonWrapper = styled.div`
  width: 30rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #fff;
  border: 0.1px solid;
  width: 10rem;
  padding: 1rem 0rem;

  cursor: pointer;
`;

const SignUpBtn = styled.button<{ page: string }>`
  width: 446px;
  padding: 1rem 0;
  background-color: #02c75a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  ${(props) =>
    props.page === "login"
      ? css`
          margin-top: 5rem;
        `
      : css`
          margin-top: 1rem;
        `}
`;

const NumberBtn = styled.button`
  width: 446px;
  padding: 1rem 0;
  background-color: white;
  color: gray;
  border: 0.5px solid;
  border-radius: 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

function Login() {
  const [page, setPage] = useState("login");

  return (
    <Wrapper>
      <CheckWrapper>
        <span>NAVER</span>
      </CheckWrapper>
      <ButtonWrapper>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setPage("login");
          }}
        >
          ID 로그인
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setPage("number");
          }}
        >
          일회용 번호
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setPage("code");
          }}
        >
          QR코드
        </Button>
      </ButtonWrapper>
      {page === "login" ? (
        <InputBox>
          <Box>
            <input type="text" placeholder="이름" />
            <input type="text" placeholder="생년월일 8자리" />
            <SignUpBtn page="login">로그인</SignUpBtn>
          </Box>
        </InputBox>
      ) : null}
      {page === "number" ? (
        <InputBox>
          <Box>
            <p>
              네이버앱의 메뉴 {`>`} 설정 {`>`} 로그인 아이디 관리 {`>`} <br />
              더보기 {`>`} 일회용 로그인 번호에 보이는 번호를 입력해 주세요
            </p>
            <NumberBtn>번호를 입력하세요</NumberBtn>
            <SignUpBtn page="number">로그인</SignUpBtn>
          </Box>
        </InputBox>
      ) : null}
      <Bottom>
        <span>비밀번호 찾기</span>
        <span>|</span>
        <span>아이디 찾기</span>
        <span>|</span>
        <span>회원가입</span>
      </Bottom>
    </Wrapper>
  );
}

export default Login;
