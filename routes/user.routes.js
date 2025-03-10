import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.get('/', getUsers);

UserRouter.get('/:id',authorize, getUser);

UserRouter.post('/', (req,res) => res.send({title: 'CREATE a new users'}));

UserRouter.put('/:id', (req,res) => res.send({title: 'UPDATE user'}));

UserRouter.delete('/:id', (req,res) => res.send({title: 'DELETE user'}));

export default UserRouter;

