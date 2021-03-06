import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import auth from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(auth);

routes.put('/users', UserController.update);

export default routes;
