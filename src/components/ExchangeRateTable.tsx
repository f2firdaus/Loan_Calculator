import  { useState, useMemo } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useExchangeRates } from '../hooks/useExchangerate'; 
import { Table } from '@mui/material';



function ExchangeRateTable() {
  const { rates, error } = useExchangeRates('USD'); 
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const exchangeRatePairs: [string, number][] = useMemo(() => {
    return rates ? Object.entries(rates) : [];
  }, [rates]);


const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
  setPage(newPage);
};


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - exchangeRatePairs.length) : 0;

  const visibleRows = useMemo(
    () =>
      exchangeRatePairs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, exchangeRatePairs],
  );

  if (!rates && !error) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="exchange rate table">
        <TableHead>
          <TableRow>
            <TableCell>Currency Pair (USD to X)</TableCell>
            <TableCell align="right">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={2} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={exchangeRatePairs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
}

export default ExchangeRateTable;