import { useState, useEffect } from 'react';
import { fetchBusData } from '../services/busService';

function useBusData() {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const buses = await fetchBusData();
      setBusData(buses);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 1000); // Fetch every 1 second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return busData;
}

export default useBusData;