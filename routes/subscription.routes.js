import { Router } from 'express';

const SubscriptionRouter = Router();

SubscriptionRouter.get('/', (req,res) => res.send({title: 'GET all subscriptions'}));

SubscriptionRouter.get('/:id', (req,res) => res.send({title: 'GET subscriptions details'}));

SubscriptionRouter.post('/', (req,res) => res.send({title: 'CREATE subscriptions'}));

SubscriptionRouter.put('/:id', (req,res) => res.send({title: 'UPDATE subscriptions'}));

SubscriptionRouter.delete('/:id', (req,res) => res.send({title: 'DELETE all subscriptions'}));

SubscriptionRouter.get('/user/:id', (req,res) => res.send({title: 'GET all user subscriptions'}));

SubscriptionRouter.put('/:id/cancel', (req,res) => res.send({title: 'CANCEL subscriptions'}));

SubscriptionRouter.get('/upcoming-renewals', (req,res) => res.send({title: 'GET upcoming subscription renewals'}));


export default SubscriptionRouter;