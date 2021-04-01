import { NextApiRequest, NextApiResponse } from 'next'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const VERSION_NO = '0.0.1'
  const BUILD_NO = 1

  return res.status(200).json({
    version: VERSION_NO,
    buildVersion: process.env.BUILD_ENV || BUILD_NO,
    healthCheck: true
  })
}
