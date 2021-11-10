import React from 'react';
import './App.css';


//Render Components Imports
import NewGoalForm from './components/NewGoalForm';
import Goals from './features/goals/Goals';
import { Quote } from './features/quotes/Quotes';

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
      <footer>
      <Quote />
      </footer>
    </main>

  );
}

export default App;
