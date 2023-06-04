import type { NextApiRequest, NextApiResponse } from 'next'

import { data2 } from '../../data/data'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    setTimeout(() => {
      res.status(200).json({ data2 })
    }, 1000)
  } catch(e) {
    res.status(500)
  }
}
