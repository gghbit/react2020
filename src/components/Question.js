import React, {Fragment, useState} from 'react';
import Error from './Error';

const Question = (props) => {
  let {title, saveBudget, saveRemaining } = props;
  const [amount, saveAmount] = useState(0);
  const [error, updateError] = useState(false);
  
  const defineBudget = e => {
    saveAmount(parseInt(e.target.value, 10));
  }
  
  const addBudget = evt => {
    evt.preventDefault();
    let errorValue = amount < 1 || isNaN(amount);
    updateError(errorValue);
    saveBudget(amount);
    saveRemaining(amount);
  }
  return (
    <Fragment>
      <h2>{title}</h2>
      {
        error ? <Error message="Ingresa una cantidad válida"/> : null
      }
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
}

export default Question;
