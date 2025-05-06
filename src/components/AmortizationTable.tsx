
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

type Props = {
    principal: number;
    annualRate: number;
    durationYears: number;
    exchangeRates: { [key: string]: number } | null;
    selectedCurrency: string;
};



import { useAmortization } from '../hooks/useAmortization';

const AmortizationTable = ({
    principal,
    annualRate,
    durationYears,
    exchangeRates,
    selectedCurrency,
}: Props) => {
    const schedule = useAmortization(principal, annualRate, durationYears);

    console.log("AmortizationTable - selectedCurrency:", selectedCurrency);
    console.log("AmortizationTable - exchangeRates:", exchangeRates);

    const convert = (amount: number) => {
      if (!exchangeRates || typeof exchangeRates !== 'object' || exchangeRates === null) {
          return `${amount.toFixed(2)} ${selectedCurrency}`;
      }
  
      const rateToUSD = exchangeRates["USD"];
      const rateToSelected = exchangeRates[selectedCurrency];
  
      if (isNaN(Number(rateToUSD)) || isNaN(Number(rateToSelected)) || rateToUSD === 0) {
          return `${amount.toFixed(2)} ${selectedCurrency}`; // Fallback
      }
  
      const convertedAmount = (amount / rateToUSD) * rateToSelected;
      return `${convertedAmount.toFixed(2)} ${selectedCurrency}`;
  };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell>Principal</TableCell>
                        <TableCell>Interest</TableCell>
                        <TableCell>Remaining Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule.map((row) => (
                        <TableRow key={row.month}>
                            <TableCell>{row.month}</TableCell>
                            <TableCell>{convert(row.principal)}</TableCell>
                            <TableCell>{convert(row.interest)}</TableCell>
                            <TableCell>{convert(row.remainingBalance)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AmortizationTable;