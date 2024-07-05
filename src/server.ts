import cors from "cors"
import routes from "./routes"
import express from "express"

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(4000, () => {
  console.log("Server is running on port 4000")
})