import React, { ReactElement, useEffect, useState } from 'react';

import QuestionList from './QuestionList';
import Title from './Title';

import Progress from 'component/common/Progress';

type QuestionPropsType = {
  step: number;
  lengthQuestion: number;
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVariant: (index: number) => void;
};

const Question = (props: QuestionPropsType): ReactElement => {
  const { step, question, onClickVariant, lengthQuestion } = props;

  const [time, setTime] = useState(30);

  const seconds = time - Math.floor(time / 60) * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => (time >= 1 ? time - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const percentTarget = Math.round((step / lengthQuestion) * 100);

  return (
    <>
      {seconds}

      <div className="h-[5px] rounded-[10px] bg-white mb-[25px]">
        <div
          style={{ width: `${time}%` }}
          className="h-full rounded-[30px]  bg-black ease-in-out"
        />
      </div>
      <Progress percentTarget={percentTarget} />

      <div>
        <Title valueTitle={question.title} />

        <QuestionList question={question} onClickVariant={onClickVariant} />
      </div>
    </>
  );
};

export default Question;
