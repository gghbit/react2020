import React, {useState} from 'react';
import Question from './components/Question';

function App() {
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Question
            title="Coloca tu presupuesto"
            saveBudget={saveBudget}
            saveRemaining={saveRemaining}
          ></Question>
        </div>
      </header>
    </div>
  );
}

export default App;
