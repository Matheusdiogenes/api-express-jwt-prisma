interface IUserRepo {
  save: (user: User) => Promise<User>
}

export { IUserRepo }