import { UserRepo } from "../repository/implementation/UserRepo"
import { compare } from 'bcrypt'
import { generateToken } from "../utils/jwt/generateToken"

export const loginController = async (req, res) => {
  const { email, password } = req.body
  const user = await new UserRepo().findUser(email)

  if (!user) {
    return res.status(200).send({
      message: 'email or password invalid.'
    })
  }

  const passwordCompare = await compare(password.toString(), user.password)
  if (!passwordCompare) {
    return res.status(200).send({
      message: 'email or password invalid.'
    })
  }

  const token = await generateToken(user)

  return res.status(200).send({ token })
}