import { Button, Box } from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
interface Props {
  loading?: boolean;
  onConfirm?: () => unknown;
}
const DeleteTwoButton = ({ loading, onConfirm }: Props) => {
  const [modal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleConfirm = () => {
    setModal(false);
    if (onConfirm) {
      onConfirm();
    }
  };
  return (
    <Box>
      <Button variant="contained" color="error" onClick={deleteHandler} disabled={loading}>
        Delete
      </Button>
      <Dialog open={modal} onClose={handleClose}>
        <DialogTitle>Delete Item?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be reverted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleConfirm} variant="outlined" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default DeleteTwoButton;
