import {Router} from 'express'
import CustomerController from './app/Controllers/CustomerController';
import ContactController from './app/Controllers/ContactController';
const routes = new Router();

routes.get('/customer', CustomerController.index)
routes.get('/contact', ContactController.index)

export default routes;
