import { Typography, Card, CardContent, CardActions, Button, Grid, Divider } from '@mui/material';
import SparkLine from './SparkLine';
import { useState } from 'react';
import { chartData } from './chartData';
const SparkLineChart = () => {
  const [visits, setVisits] = useState<any>(chartData[0].visit);
  const [orders, setOrders] = useState<any>(chartData[0].order);
  const [collection, setColleciton] = useState<any>(chartData[0].colleciton);
  const [selectedButton, setSelecedButton] = useState<any>('');
  const clickHandler = (value: number, e?: any) => {
    const data = chartData.find((arr) => arr.id === value);
    if (data) {
      setVisits(data.visit);
      setOrders(data.order);
      setColleciton(data.colleciton);
      setSelecedButton(e.target.id);
    }
  };
  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Visits
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button
              id="one"
              variant="contained"
              color={selectedButton == 'one' ? 'primary' : 'success'}
              onClick={(e) => clickHandler(1, e)}
            >
              Today
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              id="seven"
              color={selectedButton == 'seven' ? 'primary' : 'success'}
              variant="contained"
              onClick={(e) => clickHandler(7, e)}
            >
              Last 7 Days
            </Button>
          </Grid>
          <Grid item xs={3} sx={{ ml: -1 }}>
            <Button
              id="thirty"
              color={selectedButton == 'thirty' ? 'primary' : 'success'}
              variant="contained"
              onClick={(e) => clickHandler(30, e)}
            >
              Last 30 Days
            </Button>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 3.5 }} container spacing={1} justifyContent="space-between">
          <Grid sx={{ mt: 4 }} item xs={2}>
            <Typography sx={{ mb: 1.5, mt: 3, fontWeight: 600 }} color="text.secondary">
              {visits}
              <br />
              <Typography sx={{ fontSize: 17, fontWeight: 600 }}> New Visits.</Typography>
            </Typography>
          </Grid>
          <Grid item xs={8} sx={{ mt: -4 }}>
            <SparkLine />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={2}>
            <Typography sx={{ mb: -2, mt: 3 }} color="text.secondary">
              Total Orders
            </Typography>
            <br />
            <Typography sx={{ fontWeight: 600 }} color="text.secondary">
              {orders}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ mb: -2, mt: 3 }} color="text.secondary">
              Total Collection
            </Typography>
            <br />
            <Typography sx={{ fontWeight: 600 }} color="text.secondary">
              {collection}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default SparkLineChart;
