import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

async function getAllUsers(
  request: Request, 
  response: Response
) {
  await prisma.user.findMany()
    .then((users) => {
      return response.status(200).json(users)
    })
    .catch(() => {
      return response.status(500).json({ error: "Internal Server Error"})
    })
}

export default getAllUsers