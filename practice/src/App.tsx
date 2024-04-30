import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("rerender");
  }, []);

  return (
    <div>
      <h1>카운터</h1>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button>
    </div>
  );
}

export default App;
