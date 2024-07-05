import { Router } from "express"
import loginUser from "./services/auth/login-user"
import { authMiddleware } from "./middlewares/auth"
import registerUser from "./services/auth/register-user"
import getUserByToken from "./services/get-user-by-token"
import getAllUsers from "./services/admin/get-all-users"

const routes = Router()

routes.post('/register', registerUser)
routes.post('/login', loginUser)

routes.get('/user', authMiddleware, getUserByToken)
routes.get('/users', authMiddleware, getAllUsers)

export default routes