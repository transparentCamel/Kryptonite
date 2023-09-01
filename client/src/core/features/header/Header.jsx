import React from 'react';
import { HeaderStyles } from './Header.Styles';
import diamond from '../../../assets/svg/diamond.svg';

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Kryptonite</h1>
      <img src={diamond} alt='Logo' />
    </HeaderStyles>
  );
}
