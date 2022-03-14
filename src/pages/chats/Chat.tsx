import { Box, Button, Typography } from '@mui/material';
import { purple, indigo } from '@mui/material/colors';
import { Grid } from '@mui/material';
//
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import ChatLists from './ChatLists';
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
        <Grid
          item
          xs={8}
          sx={{ height: '79vh', backgroundColor: 'white', ml: -3, borderRadius: 5 }}
        >
          <Grid container sx={{ ml: -1 }}>
            <Grid item xs={13} sx={{ height: '15vh' }}>
              <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
                <Grid item></Grid>

                <Grid item xs={9} sx={{ height: 50, pl: 2 }}>
                  <Typography sx={{ mb: -2, fontWeight: 600, fontSize: 20 }}>John Doe</Typography>

                  <br />

                  <Badge
                    color="success"
                    variant="dot"
                    sx={{ width: 20, height: 20, mt: 1, ml: -2, mr: 1 }}
                  >
                    <Typography sx={{ color: indigo[300], ml: 3.75, mt: -1.5, fontSize: 17 }}>
                      Active
                    </Typography>
                  </Badge>
                </Grid>
                <Grid item xs={3} sx={{ color: 'secondary' }}>
                  <NotificationsNoneOutlinedIcon sx={{ ml: 8, mr: 2, height: 30, width: 30 }} />
                  <SettingsIcon sx={{ mr: 2 }} />
                  <MoreHorizOutlinedIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ height: '55vh' }}></Grid>
            <Grid item xs={9}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 790,
                  height: 35,
                  borderRadius: 20,
                  ml: 1,
                  backgroundColor: '#eeeeee',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, backgroundColor: 'grey' }}
                  placeholder="Enter Message"
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={2} sx={{ ml: 10, mt: 0.15 }}>
              <Button variant="contained" sx={{ borderRadius: 50 }}>
                Send <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
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
