import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../libs/prismadb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email, username, name, password } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username: username,
    },
  })

  if (userExists) {
    return res.status(400).json({ error: 'Username already exists' })
  }

  const emailExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (emailExists) {
    return res.status(400).json({ error: 'Email already exists' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    })

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
