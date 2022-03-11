import AdminTwoForm from '~/components/admin/AdminTwoForm';
import { useParams } from 'react-router-dom';
import { useAdminItem } from '~/hooks/user/admin.hook';
const EditAdminTwo = () => {
  const { id } = useParams();
  const { isLoading, item: admin } = useAdminItem(id || '');
  return <AdminTwoForm admin={admin} loading={isLoading} />;
};
export default EditAdminTwo;
