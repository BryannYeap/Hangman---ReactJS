import React from "react";

const Word = ({ theme, word, correctLettersGuessed }) => {
  return (
    <>
      <div className="theme">Theme: {theme}</div>
      <div className="word">
        {word.split("").map((letter, index) => {
          return (
            <span key={index}>
              {letter == " " ? (
                <>&nbsp;&nbsp;&nbsp;</>
              ) : correctLettersGuessed.includes(letter) ? (
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
