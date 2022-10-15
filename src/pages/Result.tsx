import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { PATHS } from '../types/routes.enum';

type ResultPropsType = {
  correct: number;
  lengthQuestion: number;
};
const Result = (props: ResultPropsType): ReactElement => {
  const { correct, lengthQuestion } = props;

  return (
    <div>
      {correct > 1 ? (
        <img
          className="mb-[15px] ml-auto mr-auto max-w-[294px] h-[250px] w-full"
          src="https://media1.giphy.com/media/dxocWugDZRyG4/giphy.gif?cid=ecf05e4752q6vweizbl1yzox2ffm5pla6qx4eg2rjbleh6mc&rid=giphy.gif&ct=g"
          alt="men happy"
        />
      ) : (
        <img
          className="mb-[15px] ml-auto mr-auto max-w-[294px] h-[250px] h-full"
          src="https://media4.giphy.com/media/3Hn54fJaY7RUdhO2Uw/giphy.gif?cid=ecf05e475lkdwb7mq6vdknchkurcyjrv1gkp8el0usxuf8ki&rid=giphy.gif&ct=g"
          alt="men sad"
        />
      )}

      <h2 className="mb-[15px]">
        Ви знали <span className="text-amber-600">{correct}</span> відповіді з{' '}
        <span className="text-amber-600">{lengthQuestion}</span>
      </h2>
      <NavLink className="border-b-4 border-amber-100" to={PATHS.ROOT}>
        return to home
      </NavLink>
    </div>
  );
};

export default Result;
