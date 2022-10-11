import React, { ReactElement } from 'react';

import WrapperQuestion from 'component/common/WrapperQuestion';
import { htmlQuestions } from 'db/htmlQuastion';

const HtmlQuestion = (): ReactElement => {
  return (
    <div>
      <WrapperQuestion questionArray={htmlQuestions} />
    </div>
  );
};

export default HtmlQuestion;
