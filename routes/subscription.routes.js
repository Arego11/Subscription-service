import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription } from '../controllers/subscription.controller.js';
import { getUserSubscriptions } from '../controllers/subscription.controller.js';
const SubscriptionRouter = Router();

SubscriptionRouter.get('/', (req,res) => res.send({title: 'GET all subscriptions'}));

SubscriptionRouter.get('/:id', (req,res) => res.send({title: 'GET subscriptions details'}));

SubscriptionRouter.post('/', authorize, createSubscription);

SubscriptionRouter.put('/:id', (req,res) => res.send({title: 'UPDATE subscriptions'}));

SubscriptionRouter.delete('/:id', (req,res) => res.send({title: 'DELETE all subscriptions'}));

SubscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

SubscriptionRouter.put('/:id/cancel', (req,res) => res.send({title: 'CANCEL subscriptions'}));

SubscriptionRouter.get('/upcoming-renewals', (req,res) => res.send({title: 'GET upcoming subscription renewals'}));


export default SubscriptionRouter;