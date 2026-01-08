import React from "react";

const Paragraph = ({ children }) => (
  <p
    style={{
      fontFamily: "Poppins",
      fontSize: "1.2rem",
      color: "white",
      lineHeight: "1.7",
      marginBottom: "1rem",
    }}
  >
    {children}
  </p>
);

export default Paragraph;
