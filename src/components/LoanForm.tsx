import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useEmiCalculator } from '../hooks/useEmiCalculator';

type Props = {
  onSubmit: (values: { amount: number; rate: number; year: number }) => void;
};

const LoanForm = ({ onSubmit }: Props) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    amount: '',
    rate: '',
    year: '',
  });

  // Convert values to numbers safely for the hook
  const parsedAmount = parseFloat(amount);
  const parsedRate = parseFloat(rate);
  const parsedYear = parseInt(year);
  const isValidInput = !isNaN(parsedAmount) && !isNaN(parsedRate) && !isNaN(parsedYear);

  // Call hook ONLY at top level — this is valid
    const { emi } = useEmiCalculator(
    isValidInput ? parsedAmount : 0,
    isValidInput ? parsedRate : 0,
    isValidInput ? parsedYear : 0
  );

  const validateField = (name: string, value: string) => {
    const num = parseFloat(value);
    let error = '';

    if (value.trim() === '') {
      error = 'Required';
    } else if (name === 'rate' && (num <= 0 || num > 100)) {
      error = 'Rate must be between 1 and 100';
    } else if (name === 'year' && (num <= 0 || num > 30)) {
      error = 'Year must be between 1 and 30';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error;
  };

  const handleSubmit = () => {
    const amountError = validateField('amount', amount);
    const rateError = validateField('rate', rate);
    const yearError = validateField('year', year);

    if (!amountError && !rateError && !yearError) {
      onSubmit({ amount: parsedAmount, rate: parsedRate, year: parsedYear });
      setSubmitted(true); // Trigger display of EMI
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          label="Loan Amount"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            validateField('amount', e.target.value);
          }}
          error={!!errors.amount}
          helperText={errors.amount}
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
            validateField('rate', e.target.value);
          }}
          error={!!errors.rate}
          helperText={errors.rate}
        />
        <TextField
          label="Term (Years)"
          type="number"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            validateField('year', e.target.value);
          }}
          error={!!errors.year}
          helperText={errors.year}
        />
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
        CALCULATE
      </Button>

      {/* Only show EMI after successful submit */}
      {submitted && isValidInput && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Monthly EMI: ${emi}
        </Typography>
      )}
    </Box>
  );
};

export default LoanForm;
