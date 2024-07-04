import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { prisma } from "../../lib/prisma"
import { Request, Response } from "express"

async function loginUser(
  request: Request, 
  response: Response
) {
  const { email, password } = request.body

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return response.status(400).json({ error: "Email not found!" })
  }

  const verifyPassword = await bcrypt.compare(password, user.password)

  if (!verifyPassword) {
    return response.status(400).json({ error: "Wrong password!" })
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_PASS!, 
    {expiresIn: '1d',}
  )

  const { password: _, ...userLogin } = user

  return response.json({
    user: userLogin,
    token: token,
  })
}

export default loginUser