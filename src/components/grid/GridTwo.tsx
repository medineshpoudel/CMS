import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { DataGrid, DataGridProps, GridColumns, GridRowsProp } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

interface Props extends DataGridProps {
  onAddNew?: () => unknown;
}

const GridTwo = (props: Props) => {
  const navigate = useNavigate();
  const { columns: propColumns, page, rows: data, pageSize } = props;
  const [columns, setColumns] = useState<GridColumns>([]);
  const [rows, setRows] = useState<GridRowsProp>([]);
  useEffect(() => {
    setColumns([
      { flex: 1, field: 'sn', headerName: 'S.N' },
      ...propColumns.map((column) => ({ flex: 1, ...column })),
    ]);
  }, [propColumns]);

  useEffect(() => {
    setRows(
      data.map((item, index) => {
        const startsAt = (page || 0) * (pageSize || 1);
        return {
          sn: startsAt + index + 1,
          ...item,
        };
      })
    );
  }, [data, page, pageSize]);
  const addHandler = () => {
    navigate('/admin2/create');
  };
  return (
    <Box>
      <Box justifyContent="flex-end" display="flex" sx={{ mb: 3 }}>
        <Button variant="contained" onClick={addHandler}>
          Add
        </Button>
      </Box>

      <DataGrid autoHeight columns={columns} rows={rows} />
    </Box>
  );
};

export default GridTwo;
