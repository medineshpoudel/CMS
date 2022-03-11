import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef } from 'react';

import { Typography } from '@mui/material';
const options: Highcharts.Options = {
  title: {
    text: '',
  },
  chart: {
    borderWidth: 0,
    type: 'area',
    margin: [2, 0, 2, 0],
    width: 370,
    height: 100,
    style: {
      overflow: 'visible',
    },

    // small optimalization, saves 1-2 ms each sparkline
    // skipClone: true,
  },
  xAxis: {
    labels: {
      enabled: false,
    },
    title: {
      text: null,
    },
    accessibility: {
      rangeDescription: 'Range: 1 to 20',
    },
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
  },
  legend: {
    enabled: false,
  },
  yAxis: {
    endOnTick: false,
    startOnTick: false,
    labels: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tickPositions: [0],
  },
  tooltip: {
    pointFormat: '{series.name} was set by<b> {point.y:,.0f}</b><br/> at {point.x}pm',
  },
  plotOptions: {
    area: {
      pointStart: 1,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      type: 'area',
      data: [60, 40, 80, 30, 90, 30, 20, 100],
      name: 'Data',
    },
  ],
};
const SparkLine = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
      <br />
      <Typography
        style={{
          float: 'right',
          fontStyle: 'italic',
          fontSize: '14px',
        }}
      ></Typography>
    </div>
  );
};
export default SparkLine;
// sparkline
