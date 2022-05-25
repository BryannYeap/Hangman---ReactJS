import React from "react";

const Header = ({ fontPercentage }) => {
  return (
    <>
      <h1>
        <b style={{ fontSize: `${fontPercentage}%` }}>Hangman</b>
      </h1>
      <p style={{ fontSize: `${fontPercentage}%` }}>
        Pick a letter to start guessing the word
      </p>
      <hr />
    </>
  );
};

export default Header;
