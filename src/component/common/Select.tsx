import React, { ReactElement } from 'react';

type SelectPropsType = {
  valueSelect: string;
  setValueSelect: (valueSelect: string) => void;
};

const Select = (props: SelectPropsType): ReactElement => {
  const { valueSelect, setValueSelect } = props;

  const options = [
    { value: 'Html', symbol: '🌱' },
    { value: 'Css', symbol: '🌞' },
    { value: 'JavaScript', symbol: '🍂' },
    { value: 'React', symbol: '⛄' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    setValueSelect(event.currentTarget.value);
  };

  return (
    <div className="select-dropdown mb-[10px]">
      <select
        className="cursor-pointer text-center bg-[#e6e6e6] p-[5px] border-none rounded-[10px] active:outline-none focus:outline-none"
        name="favoriteColor"
        value={valueSelect || ''}
        onChange={event => handleChange(event)}
        required
      >
        {options.map(colorKey => (
          <option className="cursor-pointer" value={colorKey.value} key={colorKey.value}>
            {colorKey.value}
            {colorKey.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
