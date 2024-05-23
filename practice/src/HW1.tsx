import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { data } from "./utils/data";

const Wrapper = styled.div`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 5rem;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Stacks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const StacksImg = styled.li`
  cursor: pointer;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function HW1() {
  const [text, setText] = useState("");
  const [skills, setSkills] = useState([""]);
  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (data.some((stack) => text === stack.name)) {
      setSkills((prev) => {
        return [...prev, text];
      });
    } else {
      alert(`${text} => 이 기술은 없습니다.`);
    }
    setText("");
  };

  const onDoubleclicked = (idx: number) => {
    setSkills((prev) => prev.filter((_, index) => idx !== index));
  };

  return (
    <Wrapper>
      <Header>
        <h1>과제1 : Event-Handling과 map함수 이용 + useState 맛보기</h1>
      </Header>
      <MainWrapper>
        <h2>등록가능한 스택 이름(대문자까지 일치해야함)</h2>
        <Stacks>
          {data.map((stack, index) => (
            <li key={index}>{stack.name}</li>
          ))}
        </Stacks>
        <InputDiv>
          <input type="text" onChange={onChanged} value={text} />
          <button onClick={onClicked}>추가</button>
        </InputDiv>
        <Stacks>
          {skills.map((skill, index) => {
            const findSkill = data.find((stack) => stack.name === skill);
            if (findSkill) {
              return (
                <StacksImg
                  key={index}
                  onDoubleClick={() => onDoubleclicked(index)}
                >
                  <img src={findSkill.img} alt={findSkill.name} />
                </StacksImg>
              );
            } else {
              return null;
            }
          })}
        </Stacks>
      </MainWrapper>
    </Wrapper>
  );
}

export default HW1;
