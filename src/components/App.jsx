import React, { useState } from "react";

function App() {
  const customStyleHover = {
    backgroundColor: "black",
    color: "white"
  };

  const [headingText, setHeadingText] = useState("Hello"); // Init State
  const [buttonStyle, setButtonStyle] = useState(null);

  function handleClick() {
    // console.log("got Clicked");
    setHeadingText("Button is Clicked");
  }
  function handleOut() {
    setButtonStyle(null);
  }
  function handleMove() {
    setButtonStyle(customStyleHover);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseMove={handleMove}
        onMouseOut={handleOut}
        style={buttonStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
