import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ page, setPage }) {
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2} sx={{alignItems:'center', justifyContent:'center', marginTop:'15px'}}>
      <Pagination count={10} page={page} variant="outlined" shape="rounded" onChange={handlePageChange}/>
    </Stack>
  );
}
