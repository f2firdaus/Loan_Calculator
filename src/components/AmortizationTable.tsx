import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAmortization } from '../hooks/useAmortization';

type Props = {
  principal: number;
  annualRate: number;
  durationYears: number;
};

const AmortizationTable = ({ principal, annualRate, durationYears }: Props) => {
  const schedule = useAmortization(principal, annualRate, durationYears);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440, overflow: 'auto' }}>
      <Table stickyHeader size={isMobile ? 'small' : 'medium'}>
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
              <TableCell>{row.principal.toFixed(2)} USD</TableCell>
              <TableCell>{row.interest.toFixed(2)} USD</TableCell>
              <TableCell>{row.remainingBalance.toFixed(2)} USD</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;
