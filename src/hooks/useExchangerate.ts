import { useState, useEffect } from "react";
import axios from "axios";

// Define the types for the response data
interface ExchangeRatesResponse {
  result: string;
  conversion_rates: {
    [key: string]: number;
  };
}

export const useCurrencyExchange = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchRates = async () => {
    try {
      const response = await axios.get<ExchangeRatesResponse>(
        `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`
      );
       
        console.log(data.conversion_rates)
      if (data.result === "success") {
        setRates(data.conversion_rates);
      } else {
        setError("Failed to fetch exchange rates.");
      }
    } catch (err) {
      console.error(err);
      setError("API error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return { rates, loading, error };
};
