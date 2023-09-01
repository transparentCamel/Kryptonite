import React from 'react';
import { CryptoContainerStyles } from './CryptoContainer.Styles';
import Filter from '../../components/filter/Filter';

export default function CryptoContainer() {
  return (
    <CryptoContainerStyles>
      <div className='filterContainer'>
        <Filter filterName={'Filter'} />
        <Filter filterName={'Data range'} />
      </div>

      <div></div>
    </CryptoContainerStyles>
  );
}
