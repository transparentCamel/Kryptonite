import { useState, useEffect } from 'react';
import ccxt from 'ccxt';

export function useCryptoData() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const exchange = new ccxt.binance();

        const markets = await exchange.fetchMarkets();

        const symbols = markets.slice(0, 7).map((market) => market.symbol);
        const tickers = await exchange.fetchTickers(symbols);

        const data = symbols.map((symbol) => {
          const baseSymbol = symbol.split('/')[0];

          return {
            symbol: baseSymbol,
            price: tickers[symbol].last,
            image: require(`../../assets/images/${baseSymbol}.png`),
          };
        });
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setError(error);
        setLoading(false);
      }
    };
    fetchCryptoData();
  }, []);

  return { cryptoData, loading, error };
}
