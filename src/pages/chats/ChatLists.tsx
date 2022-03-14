import { purple, indigo } from '@mui/material/colors';
import { Grid, Box, Typography, Button } from '@mui/material';
//
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const ChatLists = () => {
  return (
    <Grid item xs={4} sx={{ height: '80vh' }}>
      <Grid item xs={11} sx={{ height: 100, pt: 2 }}>
        <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
          <Grid item></Grid>
          <Grid item xs={2}>
            <Avatar sx={{ bgcolor: 'red', height: 50, width: 50 }}>D</Avatar>
          </Grid>
          <Grid item xs={7} sx={{ height: 50, pl: 2 }}>
            <Typography sx={{ mb: -2, fontWeight: 600, fontSize: 20 }}>Dinesh Poudel</Typography>

            <br />

            <Badge
              color="success"
              variant="dot"
              sx={{ width: 20, height: 20, mt: 1, ml: -2, mr: 1 }}
            >
              <Typography sx={{ color: indigo[300], ml: 3.25, mt: -1.5, fontSize: 17 }}>
                Active
              </Typography>
            </Badge>
          </Grid>
          <Grid item xs={2} sx={{ color: 'secondary' }}>
            <NotificationsNoneOutlinedIcon sx={{ ml: 8, height: 30, width: 30 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} sx={{ height: '65vh' }}>
        <Box>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
              height: 35,
              borderRadius: 20,
              ml: 1,
            }}
          >
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Paper>
          <Box sx={{ mt: 2, ml: 2, display: 'flex', alignItems: 'center' }}>
            <Button color="success" variant="contained" sx={{ pl: 5, pr: 5, borderRadius: 0 }}>
              Chats
            </Button>
            <Button variant="contained" sx={{ pl: 5, pr: 5, borderRadius: 0 }}>
              Groups
            </Button>
            <Button variant="contained" sx={{ pl: 3, pr: 3, borderRadius: 0 }}>
              Contacts
            </Button>
          </Box>

          <Typography sx={{ m: 2, fontWeight: 500 }}>Recent</Typography>
          <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
            <Grid item>
              <Badge
                color="error"
                variant="dot"
                sx={{ width: 20, height: 20, mt: 3, ml: -1, mr: 1 }}
              ></Badge>
            </Grid>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: 'grey', height: 50, width: 50, ml: 1 }}>D</Avatar>
            </Grid>
            <Grid item xs={7} sx={{ height: 50, pl: 2 }}>
              <Typography sx={{ mb: -2, fontWeight: 600 }}>Dinesh</Typography>

              <br />
              <Typography>Hello i am dinesh</Typography>
            </Grid>
            <Grid item xs={2} sx={{ color: 'secondary' }}>
              13 min
            </Grid>
          </Grid>
          <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
            <Grid item>
              <Badge
                color="success"
                variant="dot"
                sx={{ width: 20, height: 20, mt: 3, ml: -1, mr: 1 }}
              ></Badge>
            </Grid>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: 'red', height: 50, width: 50, ml: 1 }}>S</Avatar>
            </Grid>
            <Grid item xs={7} sx={{ height: 50, pl: 2 }}>
              <Typography sx={{ mb: -2, fontWeight: 600 }}>Suraj</Typography>

              <br />
              <Typography>Hello i am suraj</Typography>
            </Grid>
            <Grid item xs={2} sx={{ color: 'secondary' }}>
              1 min
            </Grid>
          </Grid>
          <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
            <Grid item>
              <Badge
                color="success"
                variant="dot"
                sx={{ width: 20, height: 20, mt: 3, ml: -1, mr: 1 }}
              ></Badge>
            </Grid>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: 'red', height: 50, width: 50, ml: 1 }}>J</Avatar>
            </Grid>
            <Grid item xs={7} sx={{ height: 50, pl: 2 }}>
              <Typography sx={{ mb: -2, fontWeight: 600 }}>Jeevan</Typography>

              <br />
              <Typography>Hello i am jeevan</Typography>
            </Grid>
            <Grid item xs={2} sx={{ color: 'secondary' }}>
              50 min
            </Grid>
          </Grid>
          <Grid container sx={{ width: '90%', height: 50, m: 2 }}>
            <Grid item>
              <Badge
                color="success"
                variant="dot"
                sx={{ width: 20, height: 20, mt: 3, ml: -1, mr: 1 }}
              ></Badge>
            </Grid>
            <Grid item xs={2}>
              <Avatar sx={{ bgcolor: 'grey', height: 50, width: 50, ml: 1 }}>J</Avatar>
            </Grid>
            <Grid item xs={7} sx={{ height: 50, pl: 2 }}>
              <Typography sx={{ mb: -2, fontWeight: 600 }}>Joshila</Typography>

              <br />
              <Typography>Hello i am joshila</Typography>
            </Grid>
            <Grid item xs={2} sx={{ color: 'secondary' }}>
              20 min
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ChatLists;
