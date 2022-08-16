import { User } from "../interfaces/User";
import { saveUser } from "../repositories/userRepository";
import { validateUser } from "../validators/validateUser";

export const saveUserUseCase = (data: User) => {
  const isUserValid = validateUser(data)

  if (!isUserValid) {
    throw new Error('Invalid user')
  }

  return saveUser(data)
}