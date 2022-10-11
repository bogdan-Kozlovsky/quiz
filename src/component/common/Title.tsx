import React, { ReactElement } from 'react';

type TitlePropsType = {
  valueTitle: string;
};

const Title = (props: TitlePropsType): ReactElement => {
  const { valueTitle } = props;

  return <h1 className="text-amber-600 mb-[20px]">{valueTitle}</h1>;
};

export default Title;
