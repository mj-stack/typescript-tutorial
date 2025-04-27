import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  res.send([]);
};

const getUserById = (req: Request, res: Response) => {
  res.send({});
};

export { getUsers, getUserById };
