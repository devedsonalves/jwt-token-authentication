import bcrypt from "bcrypt"
import { prisma } from "../../lib/prisma"
import { Request, Response } from "express"

async function registerUser(
  request: Request, 
  response: Response
) {
  const { name, email, password } = request.body

  const userExists = await prisma.user.findUnique({ where: { email } })

  if (userExists) {
    return response.status(400).json({ error: "E-mail already registered!" })
  }

  const hashPassword = await bcrypt.hash(password, 10)

  const newUser = {
    name,
    email,
    password: hashPassword,
  }

  await prisma.user.create({ data: newUser })

  const { password: _, ...user } = newUser

  return response.status(201).json(user)
}

export default registerUser