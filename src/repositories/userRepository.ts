import { User } from "../interfaces/User";

const users = []

export const saveUser = (data: User) => users.push(data)