import React, { ReactElement } from 'react';

import WrapperQuestion from 'component/common/WrapperQuestion';
import { javaScriptQuestions } from 'db/javaScriptQuastion';

const JavaScriptQuestion = (): ReactElement => {
  return <WrapperQuestion questionArray={javaScriptQuestions} />;
};

export default JavaScriptQuestion;
