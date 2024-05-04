import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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

const CardWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Card = styled.div`
  width: 500px;
  height: 500px;
  background-color: aliceblue;
`;

function App() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  const scrollToIndex = (index: number) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <Header>
        <h1>useRef 이용하기</h1>
        <button onClick={() => scrollToIndex(0)}>Index1</button>
        <button onClick={() => scrollToIndex(1)}>Index2</button>
        <button onClick={() => scrollToIndex(2)}>Index3</button>
      </Header>
      <CardWrapper>
        <Card ref={(el) => (cardRefs.current[0] = el)}>
          <h2>Index1</h2>
        </Card>
        <Card ref={(el) => (cardRefs.current[1] = el)}>
          <h2>Index2</h2>
        </Card>
        <Card ref={(el) => (cardRefs.current[2] = el)}>
          <h2>Index3</h2>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}

export default App;
