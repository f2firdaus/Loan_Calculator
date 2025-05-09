
import LoanForm from "../components/LoanForm";
import { Box } from "@mui/material";
import { useState } from "react";
import AmortizationTable from "../components/AmortizationTable";
import { useExchangeRates } from "../hooks/useExchangerate";
import SelectCurrency from "../components/SelectCurrency";
import { Typography } from "@mui/material";

const Home = () => {
  const [currency, setCurrency] = useState('USD'); 
  const { rates, error } = useExchangeRates(currency);
  const [loanData, setLoanData] = useState<{
    amount: number;
    rate: number;
    year: number;
  } | null>(null);
  const [show, setShow] = useState(false);

  console.log("Home - Currency:", currency); 
  console.log("Home - Rates:", rates);       

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };
  

  return (
    <Box component="div" sx={{ marginLeft: { sm: "80px" } }}>
      

      <LoanForm
        onSubmit={(values) => {
          setLoanData(values);
          setShow(true);
        }}
      />
     
      {error && <Typography color="error">{error}</Typography>}
          {loanData && show && (
              <>
                   <SelectCurrency
              selectedCurrency={currency}
              setSelectedCurrency={handleCurrencyChange}
                  />
        <AmortizationTable
          principal={loanData.amount}
          annualRate={loanData.rate}
          durationYears={loanData.year}
          exchangeRates={rates || {}}
          selectedCurrency={currency}
              />
             
                  </>
      )}
    </Box>
  );
};

export default Home;