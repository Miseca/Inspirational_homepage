import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addGoals } from '../features/goals/goalsSlice';


export default function NewGoalForm() {
    const [text, setText] = useState("");
    //const [completedStatus, setCompletedStatus] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length === 0) {
            return;
        }

        dispatch(addGoals({
            id: uuidv4(),
            text: text
        }))
        setText('');
    };





    return (
        <section>
            <span className = "goal-form-header">What's on your mind?</span>
            <form onSubmit = {handleSubmit}>
                <input
                    className = "goal-input"
                    value = {text}
                    onChange = {(e) => setText(e.currentTarget.value)}
                    placeholder = "" 
                />
            </form>
        </section>
    );
}
