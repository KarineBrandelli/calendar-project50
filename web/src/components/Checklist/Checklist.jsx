import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { CheckboxInput } from '../Checkbox/Checkbox'
import { listItems } from './ChecklistItems'

import './Checklist.css'

export const Checklist = () => {
  const { id } = useParams()
  const database = JSON.parse(localStorage.getItem(`day ${id}`))
  const [checkedState, setCheckedState] = useState(
    database || new Array(listItems.length).fill(false)
  )

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    localStorage.setItem(`day ${id}`, JSON.stringify(updatedCheckedState))
    setCheckedState(updatedCheckedState)
  }

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
          )
        })}
      </ul>
    </>
  )
}
