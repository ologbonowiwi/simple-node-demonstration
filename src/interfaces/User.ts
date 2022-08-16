export interface Role {
  id: number
  name: string
}

export interface User {
  id: number
  active: boolean
  email: string
  name: string
  createdAt: Date
  updatedAt: Date
  roles: Role[]
}