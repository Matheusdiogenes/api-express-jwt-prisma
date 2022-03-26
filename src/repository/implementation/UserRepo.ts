import { IUserRepo } from "../IUserRepo"
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

class UserRepo implements IUserRepo {
  save = async (user: User) => {
    const prisma = new PrismaClient()
    await prisma.users.create({
      data: {        
        name: user.name,
        email: user.email,
        password: await hash(user.password.toString(), 10)
      }
    })
    return user
  }

  findUser = async (email: string) => {
    const prisma = new PrismaClient()
    const user = await prisma.users.findUnique({
      where: {
        email,
      }
    })
    return user
  }
}

export { UserRepo }
