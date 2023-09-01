import React from 'react';
import { ButtonStyles } from './Button.Styles';

export default function Button({ text, type }) {
  return <ButtonStyles type={type}>{text}</ButtonStyles>;
}
