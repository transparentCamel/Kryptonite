import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptoGraphData = (symbol, timestamp) => {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        let limit = 1;
        if (timestamp === '1w') {
          limit = 7;
        } else if (timestamp === '1m') {
          limit = 30;
        }
        const apiUrl = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=${limit}&api_key=91e2968c7805867560066dbbc2702025bf8105b4ed68da5a66a758b0bf74d365`;

        const response = await axios.get(apiUrl);
        const data = response.data.Data.Data;

        const desiredPoints = 10;
        const dataPointInterval = Math.max(
          1,
          Math.floor(data.length / desiredPoints)
        );

        const filteredData = data.filter(
          (item, index) => index % dataPointInterval === 0
        );
        const timestamps = filteredData.map((item) => {
          const date = new Date(item.time);
          return date.toLocaleDateString('en-GB');
        });
        const prices = filteredData.map((item) => item.close);

        setGraphData({
          labels: timestamps,
          datasets: [
            {
              label: `Price of ${symbol}`,
              data: prices,
              backgroundColor: '#419547',
              borderColor: 'black',
              pointBorderColor: '#419547',
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error('Error fetching graph data:', error);
      }
    };

    fetchGraphData();
  }, [symbol, timestamp]);

  return { graphData, loading, error };
};

export default useCryptoGraphData;
