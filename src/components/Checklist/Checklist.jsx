import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { CheckboxInput } from "../Checkbox/Checkbox";
import { listItems } from "./ChecklistItems";

import "./Checklist.css";

export const Checklist = () => {
  const { id } = useParams();
  const [checkedState, setCheckedState] = useState(
    new Array(listItems.length).fill(false)
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3000/day_${id}`)
      .then((res) => {
      setCheckedState(res.data.tasks);

      console.log(res.data.tasks);
      console.log("get");
    });
  }, []);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    // console.log(updatedCheckedState);
    setCheckedState(updatedCheckedState);

    axios
      .post(`http://localhost:3000/day_${id}`, {
        tasks: updatedCheckedState,
      })
      .then((res) => {
        console.log(res.data.tasks);
        console.log("post");
      });
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
