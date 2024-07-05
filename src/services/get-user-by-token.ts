import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma"
import { Request, Response } from "express"
import { JwtPayload } from "../interfaces/jwt-payload"

async function getUserByToken(
	request: Request, 
	response: Response
) {
	const { authorization } = request.headers

	if (!authorization) {
		return response.status(403).json({ message: "Invalid authorization" })
	}

	const token = authorization.split(' ')[1]

	const { id } = jwt.verify(
		token, 
		process.env.JWT_PASS!
	) as JwtPayload

	const user = await prisma.user.findUnique({ where: { id } })

	if (!user) {
		return response.status(403).json({ message: "Invalid authorization" })
	}

	const { password: _, ...loggedUser} = user

	return response.json(loggedUser)
}

export default getUserByToken