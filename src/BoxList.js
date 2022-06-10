import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE=[]

  const [boxes, setBoxes] = useState(INITIAL_STATE)
  console.log(boxes)
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
  }

  return (
    <div className="BoxList">
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ backgroundColor, width, height, id }) => 
          <Box backgroundColor={backgroundColor} width={Number(width)} height={Number(height)} key={id}/>)}
      </div>
    </div>
  )

}

export default BoxList