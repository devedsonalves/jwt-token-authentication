import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma"
import { Request, Response } from "express"
import { JwtPayload } from "../interfaces/jwt-payload"

async function getUserByToken(
	request: Request, 
	response: Response
) {
	const { authorization } = request.headers

	console.log(authorization)

	if (!authorization) {
		return response.status(403).json({ message: "Invalid authorization" })
	}

	const token = authorization.split(' ')[1]

	console.log(token)

	const { id } = jwt.verify(
		token, 
		process.env.JWT_PASS!
	) as JwtPayload

	console.log(id)

	const user = await prisma.user.findUnique({ where: { id } })

	console.log(user)

	if (!user) {
		return response.status(403).json({ message: "Invalid authorization" })
	}

	const { password: _, ...loggedUser} = user

	console.log(loggedUser)

	return response.json(loggedUser)
}

export default getUserByToken