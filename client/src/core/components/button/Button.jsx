import React from 'react';
import { ButtonStyles } from './Button.Styles';

function Button({ text, onClick, isSelected }) {
  return (
    <ButtonStyles onClick={onClick} isSelected={isSelected}>
      {text}
    </ButtonStyles>
  );
}

export default Button;
