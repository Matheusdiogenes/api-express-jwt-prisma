import express from 'express'
import { registerController } from './controllers/registerController'
import { loginController } from './controllers/loginController'
import { validationRegister } from './middlewares/validation/register'
import { auth } from './middlewares/auth/auth'

const router = express()

router.post('/register', validationRegister, registerController)
router.post('/login', loginController)

router.post('/secret', auth, (req, res) => {
  const userID = req.userID
  console.log(userID);
  
  return res.status(200).send({
    message: 'Você é um usuário autenticado',
    userID
  })
})

export { router }