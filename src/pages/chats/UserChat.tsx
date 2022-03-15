import { Box, Button, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const friendMsg = [
  {
    id: '1',
    time: '3:30',
    msg: 'hello where are you',
  },
];
const userMsg = [
  {
    id: '1',
    time: '3:30',
    msg: 'hello where are you',
  },
];
const UserChat = () => {
  const [msg, setMsg] = useState('');
  const [datas, setDatas] = useState(friendMsg);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setDatas([
      ...datas,
      { id: '20', msg, time: `${new Date().getHours()}:${new Date().getMinutes()}` },
    ]);
  };
  return (
    <Grid item xs={8} sx={{ height: '79vh', backgroundColor: 'white', ml: -3, borderRadius: 5 }}>
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

        <Grid item xs={12} sx={{ height: '55vh' }}>
          {datas.map((messages) => (
            <Box
              key={messages.id}
              sx={{ background: 'green', ml: 3, mb: 1, width: 200, borderRadius: 5, p: 2 }}
            >
              <Typography sx={{ fontWeight: 600 }}>John Doe</Typography>
              <Typography>{messages.msg}</Typography>
              <Typography>{messages.time}</Typography>
            </Box>
          ))}
        </Grid>

        <Grid item xs={9}>
          <Paper
            onSubmit={submitHandler}
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 850,
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
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={2} sx={{ ml: 10, mt: 0.15 }}>
          <Button
            type="submit"
            onClick={submitHandler}
            variant="contained"
            sx={{ borderRadius: 50, ml: 8 }}
          >
            Send <SendIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default UserChat;
