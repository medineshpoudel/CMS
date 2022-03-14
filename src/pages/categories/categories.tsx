import { Stack } from '@mui/material';
import { GridColumns } from '@mui/x-data-grid';
import DeleteButton from '~/components/action/DeleteButton';
import EditButton from '~/components/action/EditButton';
import Grid from '~/components/grid/Grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoryList, useDeleteCategory } from '~/hooks/user/category.hook';
const Categories = () => {
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState<number | string | null>();
  const { isLoading, items: category, pagination } = useCategoryList();
  const { isLoading: isDeleting, mutate: deleteCategory } = useDeleteCategory();
  console.log(useDeleteCategory());
  const handleConfirmDelete = (id: number) => {
    setDeletingId(id);
    deleteCategory(id);
  };
  const handleAddNew = () => {
    navigate('/category/create');
  };
  const columns: GridColumns = [
    {
      field: 'slug',
      headerName: 'Slug',
      valueGetter: ({ row }) => `${row.slug}`,
    },
    {
      field: 'status',
      headerName: 'Status',
      valueGetter: ({ row }) => `${row.status}`,
    },
    {
      field: 'title',
      headerName: 'Title',
      valueGetter: ({ row }) => `${row.title}`,
    },
    {
      field: 'description',
      headerName: 'Description',
      valueGetter: ({ row }) => `${row.description}`,
    },
    // { field: 'email', headerName: 'Email' },
    // { field: 'role', headerName: 'Role', valueGetter: ({ row }) => row.status },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: ({ row }) => {
        return (
          <Stack spacing={2} direction="row">
            <EditButton to={`/admin/${row.id}/edit`} />
            <DeleteButton
              loading={isDeleting && deletingId === row.id}
              onConfirm={() => handleConfirmDelete(row.id)}
            />
          </Stack>
        );
      },
    },
  ];
  return (
    <Grid
      onAddNew={handleAddNew}
      columns={columns}
      rows={category || []}
      loading={isLoading}
      page={pagination?.page}
      pageSize={pagination?.perPage}
      rowCount={pagination?.totalRecords}
    />
  );
};
export default Categories;
