import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({api: 'api with prisma'})
})

const PORT = 3000 || process.env.PORT
app.listen(PORT)
