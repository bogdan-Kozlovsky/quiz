import React, { ReactElement } from 'react';

import WrapperQuestion from 'component/common/WrapperQuestion';
import { cssQuestions } from 'db/csstQuastion';

const CssQuestion = (): ReactElement => {
  return <WrapperQuestion questionArray={cssQuestions} />;
};

export default CssQuestion;
