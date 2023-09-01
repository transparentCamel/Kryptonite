import React from 'react';
import { FilterStyles } from './Filter.Styles';
import dropdown from '../../../assets/svg/dropDown.svg';

export default function Filter({ filterName }) {
  return (
    <FilterStyles>
      <span>
        <p>{filterName}</p>
        <img src={dropdown} alt='Drop down icon' />
      </span>
      <div>
        <li></li>
        <li></li>
      </div>
    </FilterStyles>
  );
}
