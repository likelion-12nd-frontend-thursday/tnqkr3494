import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  justify-content: center;
`;

const CheckWrapper = styled.div`
  display: flex;
  width: 30rem;
  justify-content: flex-end;
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
  padding: 15px;
  display: flex;
  justify-content: center;
  border: 0.1px solid;
`;

const Button = styled.button<{ clicked: boolean }>`
  background-color: #fff;
  border: 0.1px solid;
  padding: 0.5rem 3.5rem;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.clicked &&
    css`
      border: 1px solid #02c75a;
    `}
`;

const SignUpBtn = styled.button`
  width: 30rem;
  padding: 1rem 0;
  background-color: #02c75a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const HW2: React.FC = () => {
  const [gender, setGender] = useState<string>("");

  return (
    <Wrapper>
      <CheckWrapper>
        <span>실명 인증된 아이디로 가입</span>
      </CheckWrapper>
      <InputBox>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input
          type="text"
          placeholder="[선택] 이메일주소(비밀번호 찾기 등 본인 확인용)"
        />
      </InputBox>

      <InputBox>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="생년월일 8자리" />
        <ButtonWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setGender("male");
            }}
            clicked={gender === "male"}
          >
            남자
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setGender("female");
            }}
            clicked={gender === "female"}
          >
            여자
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setGender("");
            }}
            clicked={gender === ""}
          >
            선택안함
          </Button>
        </ButtonWrapper>
        <select name="country">
          <option value="korea">한국</option>
          <option value="usa">미국</option>
          <option value="japan">일본</option>
          <option value="china">중국</option>
          <option value="france">프랑스</option>
        </select>
        <input type="text" placeholder="휴대전화번호" />
      </InputBox>
      <SignUpBtn>회원가입</SignUpBtn>
    </Wrapper>
  );
};

export default HW2;
