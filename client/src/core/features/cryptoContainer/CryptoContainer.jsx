import React, { useState } from 'react';
import CryptoCard from '../../components/cryptoCard/CryptoCard';
import { useCryptoData } from '../../customHooks/useCryptoData';
import { CryptoContainerStyles } from './CryptoContainer.Styles';
import loadingSvg from '../../../assets/svg/loading.svg';
import Select from 'react-select';

const CryptoContainer = () => {
  const { cryptoData, loading, error } = useCryptoData();
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  const handleCryptoSelect = (selectedOption) => {
    setSelectedCrypto(selectedOption);
  };

  const options = [
    { value: '', label: 'Show All' },
    ...cryptoData.map((crypto) => ({
      value: crypto.symbol,
      label: crypto.symbol,
    })),
  ];

  return (
    <CryptoContainerStyles>
      {loading ? (
        <span className='loadingContainer'>
          <img src={loadingSvg} alt='Loading...' />
        </span>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <Select
            className='select'
            placeholder='Select a cryptocurrency...'
            options={options}
            value={selectedCrypto}
            onChange={handleCryptoSelect}
            isSearchable
          />
          <div className='cryptoCardContainer'>
            {selectedCrypto && selectedCrypto.value !== ''
              ? cryptoData
                  .filter((crypto) => crypto.symbol === selectedCrypto.value)
                  .map((crypto) => (
                    <CryptoCard
                      key={crypto.symbol}
                      symbol={crypto.symbol}
                      price={crypto.price}
                      image={crypto.image}
                    />
                  ))
              : cryptoData.map((crypto) => (
                  <CryptoCard
                    key={crypto.symbol}
                    symbol={crypto.symbol}
                    price={crypto.price}
                    image={crypto.image}
                  />
                ))}
          </div>
        </>
      )}
    </CryptoContainerStyles>
  );
};

export default CryptoContainer;
