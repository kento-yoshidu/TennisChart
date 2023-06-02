import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2003',
    "Roger Federer": 2,
    "Rafael Nadal": 0,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 12
  },
  {
    name: '2004',
    "Roger Federer": 6,
    "Rafael Nadal": 0,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 8
  },
  {
    name: '2005',
    "Roger Federer": 6,
    "Rafael Nadal": 5,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 3
  },
  {
    name: '2006',
    "Roger Federer": 8,
    "Rafael Nadal": 3,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 3
  },
  {
    name: '2007',
    "Roger Federer": 6,
    "Rafael Nadal": 4,
    "Novak Dokovic": 2,
    "Andy Murray": 0,
    "other": 2
  },
  {
    name: '2008',
    "Roger Federer": 1,
    "Rafael Nadal": 5,
    "Novak Dokovic": 4,
    "Andy Murray": 2,
    "other": 2
  },
  {
    name: '2009',
    "Roger Federer": 4,
    "Rafael Nadal": 4,
    "Novak Dokovic": 1,
    "Andy Murray": 2,
    "other": 3
  },
  {
    name: '2010',
    "Roger Federer": 3,
    "Rafael Nadal": 6,
    "Novak Dokovic": 0,
    "Andy Murray": 2,
    "other": 3
  },
  {
    name: '2011',
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 8,
    "Andy Murray": 2,
    "other": 1
  },
  {
    name: '2012',
    "Roger Federer": 4,
    "Rafael Nadal": 3,
    "Novak Dokovic": 5,
    "Andy Murray": 1,
    "other": 1
  },
  {
    name: '2013',
    "Roger Federer": 0,
    "Rafael Nadal": 6,
    "Novak Dokovic": 5,
    "Andy Murray": 2,
    "other": 1
  },
  {
    name: '2014',
    "Roger Federer": 2,
    "Rafael Nadal": 2,
    "Novak Dokovic": 6,
    "Andy Murray": 0,
    "other": 4
  },
  {
    name: '2015',
    "Roger Federer": 1,
    "Rafael Nadal": 0,
    "Novak Dokovic": 10,
    "Andy Murray": 2,
    "other": 1
  },
  {
    name: '2016',
    "Roger Federer": 0,
    "Rafael Nadal": 1,
    "Novak Dokovic": 6,
    "Andy Murray": 4,
    "other": 3
  },
  {
    name: '2017',
    "Roger Federer": 5,
    "Rafael Nadal": 4,
    "Novak Dokovic": 0,
    "other": 5
  },
  {
    name: '2018',
    "Roger Federer": 1,
    "Rafael Nadal": 4,
    "Novak Dokovic": 4,
    "other": 5
  },
  {
    name: '2019',
    "Roger Federer": 1,
    "Rafael Nadal": 4,
    "Novak Dokovic": 4,
    "other": 5
  },
  {
    name: '2020',
    "Rafael Nadal": 1,
    "Novak Dokovic": 3,
    "other": 9
  },
  {
    name: '2021',
    "Rafael Nadal": 1,
    "Novak Dokovic": 4,
    "other": 9
  },
  {
    name: '2022',
    "Rafael Nadal": 2,
    "Novak Dokovic": 3,
    "other": 9
  },
  {
    name: '2023',
    "Novak Dokovic": 1,
    "other": 13
  },
  /*
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  */
];

const Chart = () => {
  return (
    <div style={{ "width": "700px", "margin": "50px auto" }}>
      <ResponsiveContainer width="100%" aspect={4.0/3.0}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Roger Federer" stackId="a" fill="#32cd32" />
          <Bar dataKey="Rafael Nadal" stackId="a" fill="#a0522d" />
          <Bar dataKey="Novak Dokovic" stackId="a" fill="#1e90ff" />
          <Bar dataKey="Andy Murray" stackId="a" fill="#9400d3" />
          <Bar dataKey="other" stackId="a" fill="#dddddd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart

/*
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import studyDataList from './data'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StudyChart = () => (
  <div className="container">
    <LineChart
      width={700}
      height={300}
      data={studyDataList}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="date" />
      <YAxis dataKey="フェデラー" />

      <Line type="monotone" dataKey="フェデラー" stroke="#8884d8" />
      <Line type="monotone" dataKey="ナダル" stroke="#3ba2f6" />
      <Line type="monotone" dataKey="ジョコビッチ" stroke="#ff0092" />
      <Legend />
      <Tooltip />
    </LineChart>
  </div>
);

export default StudyChart
*/
