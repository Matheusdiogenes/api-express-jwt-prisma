export const validationRegister = async (req, res, next) => {

  const { name, email, password, repeatPassword } = req.body

  if (!name) {
    return badRequest('name is required.', res)
  }

  if (!email) {
    return badRequest('email is required.', res)
  }

  if (!password) {
    return badRequest('password is required.', res)
  }

  if (!repeatPassword) {
    return badRequest('repeatPassword is required.', res)
  }

  if (password !== repeatPassword) {
    return badRequest('password and repeatPassword must be the same.', res)
  }

  return next()
}

export function badRequest(message: string, httpResponse) {
  const error = new Error(message)
  error.name = 'BadRequest'
  return httpResponse.status(404).send({
    error: message
  })
}
