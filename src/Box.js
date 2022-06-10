import React from "react";
import './Box.css';

const Box = ({ backgroundColor, width, height }) => (
  <div className="Box" style={{ backgroundColor, width, height }}>
  </div>
)

export default Box