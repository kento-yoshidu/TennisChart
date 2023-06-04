import type { NextApiRequest, NextApiResponse } from 'next'

import { data1 } from '../../data/data'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    setTimeout(() => {
      res.status(200).json({ data1 })
    }, 5000)
  } catch(e) {
    res.status(500)
  }
}
