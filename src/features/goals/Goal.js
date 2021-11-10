import React from 'react';
//Importing delete and complete actions
import { useDispatch } from 'react-redux';
import { deleteGoals } from "./goalsSlice";
import { completeGoals } from "./goalsSlice";


export default function Goal({ goal }) {

    const dispatch = useDispatch();

    const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteGoals(goal));
    };

    const handleComplete = (e) => {
    e.preventDefault();
    dispatch(completeGoals(goal));
    };


  return (
    <li key = {goal.id}>
        <span>{goal.text}</span>
        <button onClick={handleDelete} aria-label="Remove">
            Remove
        </button>
        <button onClick={handleComplete} aria-label="Complete">
            Done
        </button>
    </li>
  );
}