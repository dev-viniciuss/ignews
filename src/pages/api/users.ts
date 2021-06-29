import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Marcus' },
    { id: 2, name: 'Vinicius' },
    { id: 3, name: 'Silva' },
  ]

  return response.json(users)
}