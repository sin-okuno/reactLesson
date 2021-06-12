import React from "react";

export const ColorfullMessage = (props) => {
  // 分割代入して毎回propsを指定しないようにする
  const { color, message } = props;
  const styleMessage = {
    color: color,
    fontSize: "40px"
  };

  return (
    <>
      <h3 style={styleMessage}>{message}</h3>
    </>
  );
};
