import type { NextApiRequest, NextApiResponse } from 'next'

import { data2 } from '../../data/data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    setTimeout(() => {
      res.status(200).json({ data2 })
    }, 8000)
  } catch(e) {
    res.status(500)
  }
}
