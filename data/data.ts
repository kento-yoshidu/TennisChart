export type DataType1 = {
  year: string,
  "Roger Federer"?: number
  "Rafael Nadal"?: number
  "Novak Dokovic"?: number
  "Andy Murray"?: number
  "other"?: number
}

// GS優勝回数
export const data1: DataType1[] = [
  {
    year: "2003",
    "Roger Federer": 1,
    "other": 3
  },
  {
    year: "2004",
    "Roger Federer": 3,
    "other": 1
  },
  {
    year: "2005",
    "Roger Federer": 2,
    "Rafael Nadal": 1,
    "other": 1
  },
  {
    year: "2006",
    "Roger Federer": 3,
    "Rafael Nadal": 1,
  },
  {
    year: "2007",
    "Roger Federer": 3,
    "Rafael Nadal": 1,
  },
  {
    year: "2008",
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
  },
  {
    year: "2009",
    "Roger Federer": 2,
    "Rafael Nadal": 1,
    "other": 1
  },
  {
    year: "2010",
    "Roger Federer": 1,
    "Rafael Nadal": 3,
  },
  {
    year: "2011",
    "Rafael Nadal": 1,
    "Novak Dokovic": 3,
  },
  {
    year: "2012",
    "Roger Federer": 1,
    "Rafael Nadal": 1,
    "Novak Dokovic": 1,
    "Andy Murray": 1,
  },
  {
    year: "2013",
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
    "Andy Murray": 1,
  },
  {
    year: "2014",
    "Rafael Nadal": 1,
    "Novak Dokovic": 1,
    "other": 2
  },
  {
    year: "2015",
    "Novak Dokovic": 3,
    "other": 1
  },
  {
    year: "2016",
    "Novak Dokovic": 2,
    "Andy Murray": 1,
    "other": 1
  },
  {
    year: "2017",
    "Roger Federer": 2,
    "Rafael Nadal": 2,
  },
  {
    year: "2018",
    "Roger Federer": 1,
    "Rafael Nadal": 1,
    "Novak Dokovic": 2,
  },
  {
    year: "2019",
    "Rafael Nadal": 2,
    "Novak Dokovic": 2,
  },
  {
    year: "2020",
    "Rafael Nadal": 1,
    "Novak Dokovic": 1,
    "other": 1
  },
  {
    year: "2021",
    "Novak Dokovic": 3,
    "other": 1
  },
  {
    year: "2022",
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
    "other": 1
  },
  {
    year: "2023",
    "Novak Dokovic": 1,
  },
]

// GS決勝進出回数
export const data2: DataType1[] = [
  {
    year: "2004",
    "Roger Federer": 3,
    "other": 5
  },
  {
    year: "2005",
    "Roger Federer": 2,
    "Rafael Nadal": 1,
    "other": 5
  },
  {
    year: "2006",
    "Roger Federer": 4,
    "Rafael Nadal": 2,
    "other": 2
  },
  {
    year: "2007",
    "Roger Federer": 4,
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
    "other": 1
  },
  {
    year: "2008",
    "Roger Federer": 3,
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
    "Andy Murray": 1,
    "other": 1
  },
  {
    year: "2009",
    "Roger Federer": 4,
    "Rafael Nadal": 1,
    "other": 3
  },
  {
    year: "2010",
    "Roger Federer": 1,
    "Rafael Nadal": 3,
    "Novak Dokovic": 1,
    "Andy Murray": 1,
    "other": 2
  },
  {
    year: "2011",
    "Roger Federer": 1,
    "Rafael Nadal": 3,
    "Novak Dokovic": 3,
    "Andy Murray": 1
  },
  {
    year: "2012",
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 3,
    "Andy Murray": 2
  },
  {
    year: "2013",
    "Rafael Nadal": 2,
    "Novak Dokovic": 3,
    "Andy Murray": 2,
    "other": 1
  },
  {
    year: "2014",
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 2,
    "other": 3
  },
  {
    year: "2015",
    "Roger Federer": 2,
    "Novak Dokovic": 3,
    "Andy Murray": 1,
    "other": 2
  },
  {
    year: "2016",
    "Novak Dokovic": 3,
    "Andy Murray": 3,
    "other": 2
  },
  {
    year: "2017",
    "Roger Federer": 2,
    "Rafael Nadal": 3,
    "other": 3
  },
  {
    year: "2018",
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 2,
    "other": 3
  },
  {
    year: "2019",
    "Roger Federer": 1,
    "Rafael Nadal": 3,
    "Novak Dokovic": 2,
    "other": 2
  },
  {
    year: "2020",
    "Rafael Nadal": 1,
    "Novak Dokovic": 2,
    "other": 3
  },
  {
    year: "2021",
    "Novak Dokovic": 3,
    "other": 5
  },
  {
    year: "2022",
    "Rafael Nadal": 2,
    "Novak Dokovic": 1,
    "other": 5
  },
  {
    year: "2023",
    "Novak Dokovic": 2,
    "other": 2
  }
]

// GSとMS優勝回数
export const data3: DataType1[] = [
  {
    year: '2003',
    "Roger Federer": 2,
    "Rafael Nadal": 0,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 12
  },
  {
    year: '2004',
    "Roger Federer": 6,
    "Rafael Nadal": 0,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 8
  },
  {
    year: '2005',
    "Roger Federer": 6,
    "Rafael Nadal": 5,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 3
  },
  {
    year: '2006',
    "Roger Federer": 8,
    "Rafael Nadal": 3,
    "Novak Dokovic": 0,
    "Andy Murray": 0,
    "other": 3
  },
  {
    year: '2007',
    "Roger Federer": 6,
    "Rafael Nadal": 4,
    "Novak Dokovic": 2,
    "Andy Murray": 0,
    "other": 2
  },
  {
    year: '2008',
    "Roger Federer": 1,
    "Rafael Nadal": 5,
    "Novak Dokovic": 4,
    "Andy Murray": 2,
    "other": 2
  },
  {
    year: '2009',
    "Roger Federer": 4,
    "Rafael Nadal": 4,
    "Novak Dokovic": 1,
    "Andy Murray": 2,
    "other": 3
  },
  {
    year: '2010',
    "Roger Federer": 3,
    "Rafael Nadal": 6,
    "Novak Dokovic": 0,
    "Andy Murray": 2,
    "other": 3
  },
  {
    year: '2011',
    "Roger Federer": 1,
    "Rafael Nadal": 2,
    "Novak Dokovic": 8,
    "Andy Murray": 2,
    "other": 1
  },
  {
    year: '2012',
    "Roger Federer": 4,
    "Rafael Nadal": 3,
    "Novak Dokovic": 5,
    "Andy Murray": 1,
    "other": 1
  },
  {
    year: '2013',
    "Roger Federer": 0,
    "Rafael Nadal": 6,
    "Novak Dokovic": 5,
    "Andy Murray": 2,
    "other": 1
  },
  {
    year: '2014',
    "Roger Federer": 2,
    "Rafael Nadal": 2,
    "Novak Dokovic": 6,
    "Andy Murray": 0,
    "other": 4
  },
  {
    year: '2015',
    "Roger Federer": 1,
    "Rafael Nadal": 0,
    "Novak Dokovic": 10,
    "Andy Murray": 2,
    "other": 1
  },
  {
    year: '2016',
    "Roger Federer": 0,
    "Rafael Nadal": 1,
    "Novak Dokovic": 6,
    "Andy Murray": 4,
    "other": 3
  },
  {
    year: '2017',
    "Roger Federer": 5,
    "Rafael Nadal": 4,
    "Novak Dokovic": 0,
    "other": 5
  },
  {
    year: '2018',
    "Roger Federer": 1,
    "Rafael Nadal": 4,
    "Novak Dokovic": 4,
    "other": 5
  },
  {
    year: '2019',
    "Roger Federer": 1,
    "Rafael Nadal": 4,
    "Novak Dokovic": 4,
    "other": 5
  },
  {
    year: '2020',
    "Rafael Nadal": 1,
    "Novak Dokovic": 3,
    "other": 9
  },
  {
    year: '2021',
    "Rafael Nadal": 1,
    "Novak Dokovic": 4,
    "other": 9
  },
  {
    year: '2022',
    "Rafael Nadal": 2,
    "Novak Dokovic": 3,
    "other": 9
  },
  {
    year: '2023',
    "Novak Dokovic": 1,
    "other": 13
  },
]
