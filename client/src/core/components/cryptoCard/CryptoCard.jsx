import React, { useState } from 'react';
import { CryptoCardStyles } from './CryptoCard.Styles';
import xmark from '../../../assets/svg/xmark.svg';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

import axios from 'axios';
import useCryptoGraphData from '../../customHooks/useCryptoGraphData';
import Button from '../button/Button';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function CryptoCard({ symbol, price, image }) {
  const [clicked, setClicked] = useState(false);
  const [selectedTimestamp, setSelectedTimestamp] = useState('1d');

  const { graphData, loading, error } = useCryptoGraphData(
    symbol,
    selectedTimestamp
  );

  const clickHandler = async () => {
    setClicked(!clicked);
    if (clicked) {
      setClicked(true);
    }

    try {
      await axios.post('http://localhost:3001/', {
        actionType: 'Selected Currency',
        currency: symbol,
      });
    } catch (error) {
      console.error('Error logging to MongoDB:', error);
    }
  };

  const closeHandler = (e) => {
    e.stopPropagation();
    setClicked(false);
  };

  const handleButtonClick = (timestamp) => {
    setSelectedTimestamp(timestamp);
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
          <h3>Graph Data</h3>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            <>
              <Line data={graphData} options={{ responsive: true }}></Line>
              <div className='buttonContainer'>
                <Button
                  text={'24h'}
                  onClick={() => handleButtonClick('1d')}
                  isSelected={selectedTimestamp === '1d'}
                />
                <Button
                  text={'1 Week'}
                  onClick={() => handleButtonClick('1w')}
                  isSelected={selectedTimestamp === '1w'}
                />
                <Button
                  text={'1 Month'}
                  onClick={() => handleButtonClick('1m')}
                  isSelected={selectedTimestamp === '1m'}
                />
              </div>
            </>
          )}
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
