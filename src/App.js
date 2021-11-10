import React from 'react';
import './App.css';
import NewGoalForm from './components/NewGoalForm';

//Render Components Imports
import Goals from './features/goals/Goals';

function App() {
  return (
    <main>
      <div className="App">
        <section>
          Hello World!
        </section>
        <NewGoalForm />
        <Goals />
      </div>
    </main>
  );
}

export default App;
