interface UserInterface {
  id: string,
  name: string,
  movies: Array<object>,
  todos: Array<object>,
}
type UserState = {
  user: UserInterface
}
type UserAction = {
  type: string
  user: UserInterface
}

type DispatchType = (args: UserAction) => UserAction