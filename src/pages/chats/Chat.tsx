import { Box, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Grid } from '@mui/material';
import ChatLists from './ChatLists';
import UserChat from './UserChat';
const primary = indigo[50]; // #f44336
const Chat = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        backgroundColor: primary,
        opacity: [0.9, 0.8, 0.7],
      }}
    >
      <Grid container spacing={2} sx={{ width: '100%', ml: 0.1 }}>
        <Grid item xs={13}>
          <Typography sx={{ fontSize: 25, mt: -1, ml: 2.5, color: indigo[500] }}>Chat</Typography>
        </Grid>
        <ChatLists />
        <UserChat />
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ mt: -1.75, ml: 3, color: indigo[400] }}>2022 @ Chat</Typography>
          <Typography sx={{ mt: -1.75, mr: 3, color: indigo[400] }}>
            Designed & Developed by XrDigital
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Chat;
