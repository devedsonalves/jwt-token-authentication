import jwt from 'jsonwebtoken'
import { JwtPayload } from '../interfaces/jwt-payload'
import { NextFunction, Request, Response } from 'express'

export function authMiddleware (
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { authorization } = request.headers

	if (!authorization) {
		return response.status(401).json({ message: "Token not provided" })
	}

	const token = authorization.split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.JWT_PASS!)
		const { id } = decoded as JwtPayload
		request.userId = id 
		next()
	} catch (error) {
		return response.status(401).json({ message: "Invalid authorization" })
	}
}