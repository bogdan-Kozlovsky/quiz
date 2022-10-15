import React, { ReactElement } from 'react';

type QuestionListPropsType = {
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVariant: (index: number) => void;
  restart: () => void;
};

const QuestionList = (props: QuestionListPropsType): ReactElement => {
  const { question, onClickVariant, restart } = props;

  const restartTimer = (index: number): void => {
    onClickVariant(index);
    restart();
  };

  return (
    <ul className="h-[200px] overflow-auto scrollCustom">
      {question.variants.map((variant, index) => (
        <li
          className="border-b-4 border-amber-100 cursor-pointer mb-[10px] rounded-sm"
          onClick={() => restartTimer(index)}
          role="presentation"
          key={`${variant}`}
        >
          {variant[0].toUpperCase() + variant.substring(1)}
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
