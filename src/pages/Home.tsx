import Navbar from "../components/Navbar";
import LoanForm from "../components/LoanForm";
import { Box } from "@mui/material";
import { useState } from "react";
import AmortizationTable from "../components/AmortizationTable";


const Home = () => {
   
  const [loanData, setLoanData] = useState<{
    amount: number;
    rate: number;
    year: number;
  } | null>(null);
  const [show, setShow] = useState(false);
  return (
    <Box component="div" sx={{ marginLeft: { sm: "80px" } }}>
      <Navbar />

      <LoanForm
        onSubmit={(values) => {
          setLoanData(values);
          setShow(true);
        }}
      />

      {loanData && show && (
        <AmortizationTable
          principal={loanData.amount}
          annualRate={loanData.rate}
          durationYears={loanData.year}
              />
              
          )
          
          }
    </Box>
  );
};
export default Home;
