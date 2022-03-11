import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  to: string;
}
const EditTwoButton = ({ to }: Props) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => {
          navigate(to);
        }}
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
    </Box>
  );
};
export default EditTwoButton;
