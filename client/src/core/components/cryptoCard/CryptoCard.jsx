import React from 'react';
import { CryptoCardStyles } from './CryptoCard.Styles';

export default function CryptoCard({ symbol, price, image }) {
  return (
    <CryptoCardStyles>
      <img src={image} alt={symbol} />
      <p>{symbol}</p>
      <p>{price}</p>
    </CryptoCardStyles>
  );
}
