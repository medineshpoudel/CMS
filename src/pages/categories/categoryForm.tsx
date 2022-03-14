import Form from '~/components/elements/form/Form';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
interface Props {
  loading?: boolean;
}
const CategoryForm = ({ loading }: Props) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/categories');
  };

  return (
    <Form
      onSubmit={() => {
        console.log('hi');
      }}
      onCancel={handleCancel}
    >
      <TextField id="slug" name="slug" label="Slug" placeholder="Slug" fullWidth required />
      <TextField id="status" name="status" label="Status" placeholder="Status" fullWidth required />
      <TextField id="title" name="title" label="Title" placeholder="Title" fullWidth required />
      <TextField
        id="description"
        name="description"
        label="Description"
        placeholder="Description"
        fullWidth
        required
      />
      <TextField
        id="firstName"
        name="firstName"
        label="First Name"
        placeholder="First Name"
        fullWidth
        required
      />
    </Form>
  );
};
export default CategoryForm;
