import React from "react";

const Key = ({ keyVal, onClick }) => {
  return (
    <div className="key" onClick={onClick}>
      {keyVal}
    </div>
  );
};

export default Key;
