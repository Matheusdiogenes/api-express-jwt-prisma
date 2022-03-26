import 'dotenv/config' 
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ api: 'api with prisma' })
})

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`run...`)
})
