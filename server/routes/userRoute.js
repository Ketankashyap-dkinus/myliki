import express from 'express'
// import controller file
import UserController from '../controller/userController';

const router = express.Router();

// ALL ROUTES DEFINE

router.get('/',UserController.getAllUser);


export default router;
