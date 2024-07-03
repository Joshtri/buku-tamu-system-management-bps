import express from "express";
const router = express.Router();

import * as indexController from '../controllers/index.controller.js'

import * as dashboardController from '../controllers/dashboard.controller.js';

import protect from "../config/auth/protect.js";


router.get('/',indexController.loginPage);
router.post('/post_login', indexController.loginProcess);

router.get('/adm/dashboard', protect, dashboardController.dashboardPage);


router.get('/logout', indexController.logout);
export default router;