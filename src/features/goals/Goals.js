//Import goals and goals selector
import { selectGoals } from "./goalsSlice";
import { useSelector } from "react-redux";

//Import Goal Component
import Goal from "./Goal";

export default function Goals() {
    const goals = useSelector(selectGoals);

    return (
        <section>
            <h1>Goals</h1>
            <div>
                <ul>
                    {Object.values(goals).map((goal, goalIndex) => {
                        return (
                            <Goal goal = {goal} key = {goalIndex} />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}