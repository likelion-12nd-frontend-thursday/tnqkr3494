import { useState } from "react";

interface ICard {
  imgUrl: string;
  name: string;
  price: string;
}

function Card({ imgUrl, name, price }: ICard) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="card">
      <img src={imgUrl} alt="car" />
      <div className="product-info">
        <span>{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className={toggle ? "heart" : ""}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <span className="price">{`${price}원`}</span>
    </div>
  );
}

export default Card;
