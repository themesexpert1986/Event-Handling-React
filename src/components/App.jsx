import React, { useState } from "react";

function App() {
  const customStyleHover = {
    backgroundColor: "black",
    color: "white"
  };

  const [headingText, setHeadingText] = useState("Hello"); // Init State
  const [buttonStyle, setButtonStyle] = useState(null);

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={() => setHeadingText("is Clicked")}
        onMouseMove={() => setButtonStyle(customStyleHover)}
        onMouseOut={() => setButtonStyle(null)}
        style={buttonStyle}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
