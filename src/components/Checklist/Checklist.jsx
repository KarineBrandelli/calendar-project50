import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { CheckboxInput } from "../Checkbox/Checkbox";
import { listItems } from "./ChecklistItems";

import "./Checklist.css";

export const Checklist = () => {
  const { id } = useParams();
  const [checkedState, setCheckedState] = useState(
    new Array(listItems.length).fill(false)
  );

  function getData() {
    axios({
      method: "get",
      url: `http://localhost:3000/day_${id}`,
    })
    .then((res) => {
      console.log(res.data.tasks);
    });
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = 
      checkedState.map((item, index) => index === position ? !item : item);
    
    console.log(updatedCheckedState);
  
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <ul className="checklist-items">
        {listItems.map(({ name }, index) => {
          return (
            <li key={index}>
              <CheckboxInput
                id={index}
                name={name}
                value={name}
                marked={checkedState[index]}
                changedMark={() => handleOnChange(index)}
              />
              <label>{name}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
};