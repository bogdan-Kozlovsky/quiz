import React, { ReactElement } from 'react';

type QuestionListPropsType = {
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVariant: (index: number) => void;
};

const QuestionList = (props: QuestionListPropsType): ReactElement => {
  const { question, onClickVariant } = props;

  return (
    <ul className="max-h-[200px] overflow-auto scrollCustom">
      {question.variants.map((variant, index) => (
        <li
          className="border-b-4 border-amber-100 cursor-pointer mb-[5px] rounded-sm"
          onClick={() => onClickVariant(index)}
          role="presentation"
          key={`${variant}`}
        >
          {variant}
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
