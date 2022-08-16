/**
 * PUT http://localhost:3000/api/users/1 HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY0NzM2NDE3NywiZXhwIjoxNjQ3MzY3Nzc3fQ.w4x3AwdDYloHLgIePYWvd0_vysIS4WaVlelgvwRJTh4
Content-Type: application/json
{
    "id": 1,
    "active": false,
    "email": "user@gmail.com",
    "name": "User",
    "createdAt": "2022-03-15T13:57:23.265Z",
    "updatedAt": "2022-03-15T13:57:23.265Z",
    "roles": [
      {
        "id": 1,
        "name": "Admin",
      }
  ]
}
 */

import { Request, Response } from "express";
import { saveUserUseCase } from "../use-cases/saveUser";

export const saveUserHandler = async (req: Request, res: Response) => {
  await saveUserUseCase(req.body)

  return res.status(201)
}
