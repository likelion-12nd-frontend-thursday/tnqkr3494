import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const date = currentTime.getDate();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  });

  return (
    <div className="main-body">
      <h1 className="title">안녕하세요!</h1>
      <div className="black-block"></div>
      <section className="info">
        <span>{`${year}년`}</span>
        <span>{`${month}월 ${date}일`}</span>
        <span>{`현재시간 : ${hour}시 ${minutes}분 ${seconds}초`}</span>
      </section>
    </div>
  );
}

export default App;
