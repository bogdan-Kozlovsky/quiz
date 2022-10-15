import React, { ReactElement, useEffect, useState } from 'react';

import NotificationMessage from './NotificationMessage';
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

  const [time, setTime] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => (time >= 1 ? time - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const restartTimer = (): void => {
    setTime(100);
  };

  const percentTarget = Math.round((step / lengthQuestion) * 100);

  return (
    <div>
      {!time ? (
        <NotificationMessage />
      ) : (
        <>
          <div className="h-[5px] rounded-[10px] bg-[#eee] mb-[25px]">
            <div
              style={{ width: `${time}%` }}
              className="h-full rounded-[30px] bg-black ease-in-out"
            />
          </div>
          <Progress percentTarget={percentTarget} />

          <div>
            <Title valueTitle={question.title} />

            <QuestionList
              restart={restartTimer}
              question={question}
              onClickVariant={onClickVariant}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
