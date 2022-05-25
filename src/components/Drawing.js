import React from "react";

const Drawing = ({ numberOfWrongGuesses, drawingWidth, drawingHeight }) => {
  return (
    <svg width={drawingWidth} height={drawingHeight} className="drawing">
      {/* Gallow */}
      {numberOfWrongGuesses > 0 && (
        <>
          <line x1="0%" y1="95%" x2="100%" y2="95%" className="gallow" />
          <line x1="10%" y1="5%" x2="10%" y2="95%" className="gallow" />
          <line x1="10%" y1="5%" x2="60%" y2="5%" className="gallow" />
          <line x1="60%" y1="5%" x2="60%" y2="15%" className="gallow" />
          <line x1="10%" y1="15%" x2="20%" y2="5%" className="gallow" />
        </>
      )}

      {/* Head */}
      {numberOfWrongGuesses > 1 && (
        <circle cx="60%" cy="22.5%" r="8%" className="person" />
      )}

      {/* Body */}
      {numberOfWrongGuesses > 2 && (
        <line x1="60%" y1="22.5%" x2="60%" y2="55%" className="person" />
      )}

      {/* Left Arm */}
      {numberOfWrongGuesses > 3 && (
        <line x1="60%" y1="30%" x2="45%" y2="45%" className="person" />
      )}

      {/* Right Arm */}
      {numberOfWrongGuesses > 4 && (
        <line x1="60%" y1="30%" x2="75%" y2="45%" className="person" />
      )}

      {/* Left Leg */}
      {numberOfWrongGuesses > 5 && (
        <line x1="60%" y1="55%" x2="45%" y2="75%" className="person" />
      )}

      {/* Right Leg */}
      {numberOfWrongGuesses > 6 && (
        <line x1="60%" y1="55%" x2="75%" y2="75%" className="person" />
      )}
    </svg>
  );
};

export default Drawing;
