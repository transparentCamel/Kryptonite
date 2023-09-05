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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function CryptoCard({ symbol, price, image }) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = async () => {
    setClicked(!clicked);

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

  const data = {
    labels: ['Monday', 'Monday', 'Monday'],
    datasets: [
      {
        labels: 'Sales of the week',
        data: [6, 3, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 6,
      },
    },
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
          <Line data={data} options={options}></Line>
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
