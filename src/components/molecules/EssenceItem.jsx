import React from "react";
import Paragraph from "../atoms/Paragraph";

const EssenceItem = ({ text }) => (
  <li style={{ marginBottom: "0.6rem" }}>
    <Paragraph>{text}</Paragraph>
  </li>
);

export default EssenceItem;
