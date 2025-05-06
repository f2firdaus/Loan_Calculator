
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

type Props = {
  selectedCurrency: string;
  setSelectedCurrency: (value: string) => void;
};

const currencyList = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"];

const SelectCurrency = ({ selectedCurrency, setSelectedCurrency }: Props) => {
  const handleChange = (event: ChangeEvent<{ name?: string; value: string }>) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 2, marginLeft:"14px" }}>
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel>Currency</InputLabel>
        <Select
          value={selectedCurrency}
          label="Currency"
          onChange={handleChange}
        >
          {currencyList.map((cur) => (
            <MenuItem key={cur} value={cur}>
              {cur}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCurrency;