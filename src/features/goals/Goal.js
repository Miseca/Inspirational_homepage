import React from 'react';
//Importing delete and complete actions
import { useDispatch } from 'react-redux';
import { deleteGoals } from "./goalsSlice";
import { completeGoals } from "./goalsSlice";

//Import confetti
//import Confetti from "react-dom-confetti";


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


  
    if (goal.completedStatus === true) {
      return (
        <div>
        <li key = {goal.id} className = "goal-complete">
            <span className = "goal-text">{goal.text}</span>
            <div className = "goal-button-container">
              <button onClick={handleDelete} aria-label="Remove" className = "button-remove-clicked">
                  Remove
              </button>
              <button aria-label="Complete" className = "button-complete-clicked">
                  Done
              </button>
            </div>
        </li>
      </div>
      );
    }
    else {
      return (
        <div>
          <li key = {goal.id} className = "goal">
              <span className = "goal-text">{goal.text}</span>
              <div className = "goal-button-container">
                <button onClick={handleDelete} aria-label="Remove" className = "button-remove">
                    Remove
                </button>
                <button onClick={handleComplete} aria-label="Complete" className = "button-complete">
                    Done
                </button>
              </div>
          </li>
        </div>
      );
    }
}