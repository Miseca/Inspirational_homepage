import React from 'react';
import './App.css';


//Render Components Imports
import NewGoalForm from './components/NewGoalForm';
import Goals from './features/goals/Goals';
import Quote  from './features/quotes/Quotes';
import InspirationalBackgrounds from './features/inspirationalBackground/InspirationalBackgrounds';

function App() {
  return (
    <main>
      <div className="App">
        <section>
          Hello World!
        </section>
        <NewGoalForm />
        <Goals />
        <Quote />
        <InspirationalBackgrounds />
      </div>
    </main>

  );
}

export default App;
