import React from "react";

const Word = ({ theme, word }) => {
  return (
    <>
      <div className="theme">Theme: {theme}</div>
      <div className="word">{word}</div>
    </>
  );
};

export default Word;
