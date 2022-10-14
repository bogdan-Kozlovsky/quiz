import React, { ReactElement } from 'react';

type ProgressPropsType = {
  percentTarget: number;
};

const Progress = (props: ProgressPropsType): ReactElement => {
  const { percentTarget } = props;

  return (
    <div className="h-[10px] rounded-[10px] bg-[#eee] mb-[25px]">
      <div
        style={{ width: `${percentTarget}%` }}
        className="h-full rounded-[30px] w-[80%] transition ease-in-out delay-[0.3s] progress"
      />
    </div>
  );
};

export default Progress;
