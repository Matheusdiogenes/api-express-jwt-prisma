import jwt from 'jsonwebtoken'

export const generateToken = async (payload) => {
  const token = await jwt.sign({ userID: payload.id }, process.env.SECRETKEY, { expiresIn: '2h' })
  return token
}