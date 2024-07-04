import { Router } from "express"
import loginUser from "./services/auth/login-user"
import registerUser from "./services/auth/register-user"
import getUserByToken from "./services/get-user-by-token"
import { authMiddleware } from "./middlewares/auth"

const routes = Router()

routes.post('/register', registerUser)
routes.post('/login', loginUser)

// protected routes
routes.get('/user', authMiddleware, getUserByToken)

export default routes