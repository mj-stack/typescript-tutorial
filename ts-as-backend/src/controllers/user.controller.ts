import { Request, Response } from "express";

const sayHello = (req: Request, res: Response) => {
  res.send({ name: "Mukul Joshi aka EMJAY" });
};

export { sayHello };
