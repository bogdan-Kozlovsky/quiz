import React, { ReactElement, useState } from 'react';

import { NavLink } from 'react-router-dom';

import Select from 'component/common/Select';
import WrapperComponent from 'component/common/WrapperComponent';

const Home = (): ReactElement => {
  const [valueSelect, setValueSelect] = useState('Html');

  return (
    <WrapperComponent>
      <div>
        {/* <Title valueTitle="Welcome to the Quiz" color={}/> */}
        <h1 className="text-center mb-[10px]">Welcome to the Quiz</h1>

        <Select valueSelect={valueSelect} setValueSelect={setValueSelect} />

        <NavLink
          to={`/${valueSelect}`}
          className="block bg-[#e6e6e6] p-1 rounded-[10px] p-[10px]"
          type="button"
        >
          Перейти на quiz {valueSelect}
        </NavLink>
      </div>
    </WrapperComponent>
  );
};

export default Home;
