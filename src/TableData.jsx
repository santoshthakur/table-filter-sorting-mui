import { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Box, TextField, TableSortLabel
} from '@mui/material';
import useNetwork from './custom-hook/useNetwork,js';

export default function TableData() {
  const { data, isLoading, error } = useNetwork('https://jsonplaceholder.typicode.com/users');
  const [filterText, setFilterText] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  const handleSort = (field) => {
    const isAsc = sortField === field && sortDirection === 'asc';
    setSortField(field);
    setSortDirection(isAsc ? 'desc' : 'asc');
  };

  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()) ||
    user.username.toLowerCase().includes(filterText.toLowerCase()) ||
    user.email.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField]?.toString().toLowerCase();
    const bValue = b[sortField]?.toString().toLowerCase();

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Box component="form" sx={{ width: '100%' }} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={filterText}
          onChange={handleFilter}
          label="Search Table Data"
          variant="standard"
          fullWidth
        />
      </Box>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ width: '100%' }} aria-label="sortable and filterable table">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={sortField === 'id' ? sortDirection : false}>
                <TableSortLabel
                  active={sortField === 'id'}
                  direction={sortField === 'id' ? sortDirection : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  Id
                </TableSortLabel>
              </TableCell>
              <TableCell align="right" sortDirection={sortField === 'name' ? sortDirection : false}>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={sortField === 'name' ? sortDirection : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="right" sortDirection={sortField === 'username' ? sortDirection : false}>
                <TableSortLabel
                  active={sortField === 'username'}
                  direction={sortField === 'username' ? sortDirection : 'asc'}
                  onClick={() => handleSort('username')}
                >
                  Username
                </TableSortLabel>
              </TableCell>
              <TableCell align="right" sortDirection={sortField === 'email' ? sortDirection : false}>
                <TableSortLabel
                  active={sortField === 'email'}
                  direction={sortField === 'email' ? sortDirection : 'asc'}
                  onClick={() => handleSort('email')}
                >
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.length > 0 ? (
              sortedData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="right">{user.id}</TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.address.street}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No matching records found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
