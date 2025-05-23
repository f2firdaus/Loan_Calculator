import { useEffect, useState } from 'react';
import axios from 'axios';

export const useExchangeRates = (baseCurrency: string) => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const API = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRates = async (currency: string) => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API}/latest/${currency}`
        );
     
        setRates(response.data.conversion_rates);
      } catch (err: any) {
        console.error(`Error fetching exchange rates for ${currency}`, err);
        setError(`Failed to fetch exchange rates for ${currency}.`);
       
      }
    };

    
    fetchRates('USD');

   
    if (baseCurrency && baseCurrency !== 'USD') {
      fetchRates(baseCurrency);
    }
  }, [baseCurrency, API]); 

  return { rates, error };
};