//Import goals and goals selector
import { selectGoals } from "./goalsSlice";
import { useSelector } from "react-redux";


export default function Goals() {
    const goals = useSelector(selectGoals);


    return (
        <section>
            <h1>Goals</h1>
            <div>
                {Object.values(goals).map(goal => {
                    return <p>{goal.text}</p>
                })}
            </div>
        </section>
    );
}