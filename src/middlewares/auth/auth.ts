import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
  const credentials = req.headers.authorization 
  
  if (!credentials) {
    return res.status(401).send({ message: "No token provided." })
  }

  const [typeToken, token] = credentials.split(' ')

  if (typeToken !== "Bearer") {
    return res.status(404).send({ message: "Invalid token format. The correct is: Bearer <token>" })
  }

  if (!token) {
    return res.status(401).send({ message: "No token provided." })
  }  

  jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
    if (err) {
      return res.status(400).send({ message: err.message })
    }
    req.userID = decoded.name
    return next()
  })
}
