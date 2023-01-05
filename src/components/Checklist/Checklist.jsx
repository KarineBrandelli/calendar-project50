import { CheckboxInput } from '../Checkbox/Checkbox';
import "./Checklist.css";

export const Checklist = () => {
  return (
    <>
      <ul className="checklist-items">
        <li>
          <CheckboxInput />
          WAKE UP BEFORE 8 A.M
        </li>
        <li>
          <CheckboxInput />
          READ 10 PAGES
        </li>
        <li>
          <CheckboxInput />
          1H MORNING ROUTINE
        </li>
        <li>
          <CheckboxInput />
          FOLLOWED A HELTHY DIET
        </li>
        <li>
         <CheckboxInput />
          1H EXERCISES
        </li>
        <li>
          <CheckboxInput />
          TRACK YOUR PROGRESS
        </li>
        <li>
          <CheckboxInput />
          1H LEARNING A NEW SKILL
        </li>
      </ul>
    </>
  )
}