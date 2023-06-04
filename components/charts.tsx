import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import styles from "../styles/chart.module.css"

import type { DataType1 } from '../data/data'

const Chart = ({ data }: { data: DataType1[] }) => {
  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer aspect={4.5/2.8}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />

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
  )
}

export default Chart
