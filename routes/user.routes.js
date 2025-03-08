import { Router } from "express";

const UserRouter = Router();

UserRouter.get('/', (req,res) => res.send({title: 'GET all users'}));

UserRouter.get('/:id', (req,res) => res.send({title: 'GET users details'}));

UserRouter.post('/', (req,res) => res.send({title: 'CREATE a new users'}));

UserRouter.put('/:id', (req,res) => res.send({title: 'UPDATE user'}));

UserRouter.delete('/:id', (req,res) => res.send({title: 'DELETE user'}));

export default UserRouter;

