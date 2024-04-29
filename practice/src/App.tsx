import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./components/Card";

function App() {
  return (
    <main className="wrapper">
      <Card
        imgUrl="https://blog.kakaocdn.net/dn/bfidod/btrbotjHk3E/cxLInlcFiE3pyKFSXyijZ0/img.jpg"
        name="람보르기니 우라칸"
        price="3.3억"
      />
      <Card
        imgUrl="https://cdn.ferrari.com/cms/dws/media/img/resize/610be9a9a4f52f0031023d62?"
        name="페라리 812 슈퍼패스트"
        price="5.15억"
      />
      <Card
        imgUrl="https://i.namu.wiki/i/w1XspI-M1EkF8eVxRI9VN8rd_8S_P0WU0WH-yxgvja_1608yXyLxxNiLAnDvw6LmJQaR4gdmKvD-suyONOT1BA.webp"
        name="롤스로이스 팬텀"
        price="7.12억"
      />
      <Card
        imgUrl="https://cdn.top-rider.com/news/photo/201808/27443_91037_5840.jpg"
        name="부가티 디보"
        price="73억"
      />
      <Card
        imgUrl="https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VVAXEBOQIPLXITKN3JL2YT6XIY.jpg"
        name="벤틀리 컨티넨탈 gt"
        price="3.2억"
      />
      <Card
        imgUrl="https://cdn.top-rider.com/news/photo/202012/60516_124572_5339.jpg"
        name="포르쉐 911 타르가"
        price="1.7억"
      />
    </main>
  );
}

export default App;
