import { UserRepo } from "../repository/implementation/UserRepo"

export const registerController = async (req, res) => {

  const { name, email, password } = req.body
  const saveUser = {
    name,
    email,
    password, 
  }
  const db = await new UserRepo()

  if(await db.findUser(email)) {
    return res.status(400).send({
      message: 'user already exist.'
    })
  }

  const user = await db.save(saveUser)
  
  user.password = undefined
  return res.status(200).send({ user: user })

}
