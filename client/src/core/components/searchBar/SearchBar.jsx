import React from 'react';
import { SearchBarStyles } from './SearchBar.Styles';
import Button from '../button/Button';

export default function SearchBar() {
  return (
    <SearchBarStyles>
      <input type='text' placeholder='Search...'></input>
      <Button type={'submit'} text={'Search'} />
    </SearchBarStyles>
  );
}
