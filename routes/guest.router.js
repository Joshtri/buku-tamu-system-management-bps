import express from "express";
const router = express.Router();

import * as guestController from '../controllers/guest.controller.js'
// import Guest from "../models/guest.model.js";
import protect from "../config/auth/protect.js";


router.get('/guest',protect,guestController.guestPage);

router.get('/guest/:id', protect,guestController.guestDetail);



// Route untuk export data tamu ke Excel
router.get('/export-excel', protect, guestController.convertToExcel);

// Endpoint untuk ekspor ke PDF
router.get('/export-pdf', protect, guestController.convertToPDF);

// Endpoint untuk ekspor ke DOCX
// router.get('/export-docx', guestController.convertToDOCX);
export default router;