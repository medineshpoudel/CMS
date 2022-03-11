import { Box, Typography, Grid } from '@mui/material';
import { drawerAppRoutes } from '../../routes/auth.routes';
import { ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ExternalLinks = () => {
  const navigate = useNavigate();
  const clickHandler = (link: any) => {
    if (link) {
      window.open(`https://${link}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom component="div" mt={4} ml={2}>
        Application
      </Typography>
      <Grid container spacing={1}>
        {drawerAppRoutes.map((route) => (
          <Grid item xs={6} key={route.id}>
            <ListItemButton onClick={() => clickHandler(route.link)}>
              <ListItemAvatar sx={{ ml: -1, mr: -3 }}>
                <Avatar alt="logo" src={route.image} sx={{ width: 25, height: 30 }} />
              </ListItemAvatar>
              {/* <ListItemIcon sx={{  }}>{route.image}</ListItemIcon> */}
              <ListItemText primary={route.title} />
            </ListItemButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ExternalLinks;
