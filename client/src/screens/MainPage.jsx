import SearchBar from '../core/components/searchBar/SearchBar';
import CryptoContainer from '../core/features/cryptoContainer/CryptoContainer';
import Header from '../core/features/header/Header';

export const MainPage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <CryptoContainer />
    </>
  );
};
