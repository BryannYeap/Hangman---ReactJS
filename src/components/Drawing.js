import React from "react";

const Drawing = () => {
  return (
    <svg height="300" width="250" className="drawing">
      {/* Gallow */}
      <line x1="0%" y1="95%" x2="100%" y2="95%" className="gallow" />
      <line x1="10%" y1="5%" x2="10%" y2="95%" className="gallow" />
      <line x1="10%" y1="5%" x2="60%" y2="5%" className="gallow" />
      <line x1="60%" y1="5%" x2="60%" y2="15%" className="gallow" />
      <line x1="10%" y1="15%" x2="20%" y2="5%" className="gallow" />

      {/* Head */}
      <circle cx="60%" cy="22.5%" r="8%" className="person" />

      {/* Body */}
      <line x1="60%" y1="22.5%" x2="60%" y2="55%" className="person" />

      {/* Left Arm */}
      <line x1="60%" y1="30%" x2="45%" y2="45%" className="person" />

      {/* Right Arm */}
      <line x1="60%" y1="30%" x2="75%" y2="45%" className="person" />

      {/* Left Leg */}
      <line x1="60%" y1="55%" x2="45%" y2="75%" className="person" />

      {/* Right Leg */}
      <line x1="60%" y1="55%" x2="75%" y2="75%" className="person" />
    </svg>
  );
};

export default Drawing;
