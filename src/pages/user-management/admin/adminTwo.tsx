import GridTwo from '~/components/grid/GridTwo';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GridColumns } from '@mui/x-data-grid';
import { useState } from 'react';
import DeleteTwoButton from '~/components/action/DeleteTwoButton';
import EditTwoButton from '~/components/action/EditTwoButton';
import { useAdminUserList, useDeleteAdminUser } from '~/hooks/user/admin.hook';
const AdminTwoListing = () => {
  const [deletingId, setDeletingId] = useState<number | string | null>();
  const { isLoading, items: admins, pagination } = useAdminUserList();
  const { isLoading: isDeleting, mutate: deleteAdmin } = useDeleteAdminUser();
  const navigate = useNavigate();

  const handleConfirmDelete = (id: number) => {
    setDeletingId(id);
    deleteAdmin(id);
  };
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Name',

      valueGetter: ({ row }) => `${row.firstName} ${row.lastName}`,
    },
    {
      field: 'email',
      headerName: 'Email',
    },
    { field: 'role', headerName: 'Role', valueGetter: ({ row }) => row.role.name },
    {
      field: 'actions',
      headerName: 'Actions',

      renderCell: ({ row }) => {
        if (row.role.isSuperAdmin) {
          return null;
        }
        return (
          <Stack spacing={2} direction="row">
            <DeleteTwoButton
              loading={isDeleting && deletingId === row.id}
              onConfirm={() => handleConfirmDelete(row.id)}
            />
            <EditTwoButton to={`/admin2/${row.id}/edit`} />
          </Stack>
        );
      },
    },
  ];
  return <GridTwo columns={columns} rows={admins || []} />;
};
export default AdminTwoListing;
