import React, { ReactElement } from 'react';

import WrapperQuestion from 'component/common/WrapperQuestion';
import { reactQuestions } from 'db/reactQuastion';

const ReactQuestion = (): ReactElement => {
  return <WrapperQuestion questionArray={reactQuestions} />;
};

export default ReactQuestion;
