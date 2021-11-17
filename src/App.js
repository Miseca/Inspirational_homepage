import React from 'react';
import './App.css';


//Render Components Imports
import NewGoalForm from './components/NewGoalForm';
import Goals from './features/goals/Goals';
import Quote  from './features/quotes/Quotes';
import InspirationalBackgrounds from './features/inspirationalBackground/InspirationalBackgrounds';
import Weather from './features/weather/Weather';

function App() {
  return (
        <div className="App">
          <div className = "background-container">
            <InspirationalBackgrounds />
          </div>
          <header>
            <div className = "weather-container">
              <Weather />
            </div>
          </header>
          <main>
            <div className = "goal-form">
              <NewGoalForm />
            </div>
            <div className = "goal-container">
              <Goals />
            </div>
          </main>
          <footer>
            <div className = "quote-container">
              <Quote />
            </div>
          </footer>
        </div>
  );
}

export default App;
