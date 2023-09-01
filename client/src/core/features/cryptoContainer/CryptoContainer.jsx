import React from 'react';
import CryptoCard from '../../components/cryptoCard/CryptoCard';
import { useCryptoData } from '../../customHooks/useCryptoData';
import { CryptoContainerStyles } from './CryptoContainer.Styles';

const CryptoContainer = () => {
  const { cryptoData, loading, error } = useCryptoData();

  return (
    <CryptoContainerStyles>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className='cryptoCardContainer'>
          {cryptoData.map((crypto) => (
            <CryptoCard
              key={crypto.symbol}
              symbol={crypto.symbol}
              price={crypto.price}
              image={crypto.image}
            />
          ))}
        </div>
      )}
    </CryptoContainerStyles>
  );
};

export default CryptoContainer;
