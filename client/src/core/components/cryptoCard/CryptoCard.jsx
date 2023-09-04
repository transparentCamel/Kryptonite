import React, { useState } from 'react';
import { CryptoCardStyles } from './CryptoCard.Styles';
import xmark from '../../../assets/svg/xmark.svg';

export default function CryptoCard({ symbol, price, image }) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
    if (clicked) {
      setClicked(clicked);
    }
  };
  const closeHandler = (e) => {
    e.stopPropagation();

    setClicked(false);
  };
  return (
    <CryptoCardStyles
      onClick={clickHandler}
      className={clicked ? 'clicked' : ''}
    >
      <div className='topContainer'>
        <img src={image} alt={symbol} />
        <p>{symbol}</p>
        <p>{price}</p>
      </div>

      {clicked ? (
        <div className='bottomContainer'>
          <h3>Enter Graph Data</h3>
          <div>here is the chart</div>
        </div>
      ) : null}

      {clicked ? (
        <span onClick={closeHandler}>
          <img src={xmark} alt='X mark' />
        </span>
      ) : null}
    </CryptoCardStyles>
  );
}
