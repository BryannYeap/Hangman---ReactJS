import React from "react";

const Word = ({ theme, word, lettersGuessed, fontPercentage }) => {
  return (
    <>
      <div className="theme" style={{ fontSize: `${fontPercentage}%` }}>
        Theme: {theme}
      </div>

      <div className="word" style={{ fontSize: `${fontPercentage}%` }}>
        {word.split("").map((letter, index) => {
          return (
            <span key={index}>
              {letter === " " ? (
                <>&nbsp;&nbsp;&nbsp;</>
              ) : lettersGuessed.includes(letter) ? (
                letter
              ) : (
                " _ "
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Word;
