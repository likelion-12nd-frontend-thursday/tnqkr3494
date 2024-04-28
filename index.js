let date = document.querySelector("input");
let text = document.querySelector("#calculator-result-text");
const btn = document.querySelector(".calculator button");

let now = new Date();

const result = () => {
  let born = new Date(date.value);
  let age = 0;
  if (now.getFullYear() >= born.getFullYear()) {
    if (
      now.getMonth() > born.getMonth() ||
      (now.getMonth() === born.getMonth() && now.getDate() >= born.getDate())
    ) {
      age = now.getFullYear() - born.getFullYear();
    } else {
      age = now.getFullYear() - born.getFullYear() - 1;
    }
  }

  if (age < 0) {
    text.innerText = "올바른 날짜를 입력하세요!!!";
  } else {
    text.innerText = `만으로 ${age}살 입니다`;
  }
};

btn.addEventListener("click", result);
