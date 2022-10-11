import React, { ReactElement } from 'react';

const WrapperComponent = ({ children }: any): ReactElement => {
  return (
    <div className="flex items-center justify-center text-center bg-[#fff] p-[30px] min-h-[400px] rounded-[20px]">
      {children}
    </div>
  );
};

export default WrapperComponent;
