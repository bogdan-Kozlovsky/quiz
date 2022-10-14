import React, { ReactElement, useState } from 'react';

import Question from 'component/common/Question';
import WrapperComponent from 'component/common/WrapperComponent';
import Result from 'pages/Result';

type QuestionArrayType = {
  title: string;
  variants: string[];
  correct: number;
};

type WrapperPagesPropsType = {
  questionArray: Array<QuestionArrayType>;
};

const WrapperQuestion = (props: WrapperPagesPropsType): ReactElement => {
  const { questionArray } = props;

  const [step, setStep] = useState(0);

  const [correctQuestion, setCorrectQuestion] = useState(0);

  const question = questionArray[step];

  const onClickVariant = (index: number): void => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrectQuestion(correctQuestion + 1);
    }
  };

  const lengthQuestion = questionArray.length;

  return (
    <div>
      <WrapperComponent>
        <div className="w-full">
          {step !== questionArray.length ? (
            <Question
              lengthQuestion={lengthQuestion}
              step={step}
              question={question}
              onClickVariant={onClickVariant}
            />
          ) : (
            <Result correct={correctQuestion} lengthQuestion={lengthQuestion} />
          )}
        </div>
      </WrapperComponent>
    </div>
  );
};

export default WrapperQuestion;
