import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

type ResultPropsType = {
  correct: number;
  lengthQuestion: number;
};
const Result = (props: ResultPropsType): ReactElement => {
  const { correct, lengthQuestion } = props;

  return (
    <div>
      <h2>
        Ви відгадали {correct} відповіді з {lengthQuestion}
      </h2>
      <NavLink to="/">return to home</NavLink>
    </div>
  );
};

export default Result;
