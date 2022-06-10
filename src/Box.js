import React from "react";
import './Box.css';

const Box = ({ backgroundColor, width, height, removeBox, id }) => {
  const handleRemove = () => {
    removeBox(id)
  }

  return (
  <div className="Box" style={{ backgroundColor, width, height }}>
    <button onClick={handleRemove}>x</button>
  </div>
  )
}

export default Box