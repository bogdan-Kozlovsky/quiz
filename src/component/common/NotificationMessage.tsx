import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { PATHS } from '../../types/routes.enum';

const NotificationMessage = (): ReactElement => {
  return (
    <div>
      <img
        className="mb-[15px] ml-auto mr-auto max-w-[294px] h-[250px] w-full"
        src="https://media1.giphy.com/media/Qvm2704d1Dqus/giphy.gif?cid=ecf05e477fdnq3y6vd8ib9d9tyk3oietw9ors9ylov9xr5m0&rid=giphy.gif&ct=g"
        alt="bad result gif"
      />
      <h3 className="mb-[10px] text-orange-700 font-bold">
        You did not have time to answer the question!
      </h3>
      <NavLink className="border-b-4 border-amber-100" to={PATHS.ROOT}>
        return to home
      </NavLink>
    </div>
  );
};

export default NotificationMessage;
