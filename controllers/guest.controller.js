import {createExcel} from '../helpers/createExcel.js';
import {createPDF} from '../helpers/createPDF.js';

import * as guestServices from '../services/guest.services.js';


export const guestPage = async(req,res)=>{
    const title = "Data Tamu"
    
    try {

        const guestData = await guestServices.getAllGuest();
        
        res.render('data_guest',{
            title,
            guestData
        })
    } catch (error) {
        throw error;
    }
}

export const guestDetail = async (req, res) => {
    const title = "Detail Tamu"
    try {
        const guest = await guestServices.getGuestById(req.params.id);
        res.render('detail_guest', { guest, title });
    } catch (error) {
        res.status(404).send('Guest not found');
    }
};


// Function to convert data to Excel
export const convertToExcel = async (req, res) => {
    try {
        const guestData = await guestServices.getAllGuest();

        // Call function to create Excel after data is retrieved
        createExcel(guestData, res);
    } catch (error) {
        console.error('Error retrieving data from database:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Ekspor ke PDF
export const convertToPDF = async (req, res) => {
    try {
        const guestData = await guestServices.getAllGuest();
        createPDF(guestData, res);
    } catch (error) {
        console.error('Error retrieving data from database:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Ekspor ke DOCX
export const convertToDOCX = async (req, res) => {
    try {
        const guestData = await guestServices.getAllGuest();
        createDOCX(guestData, res);
    } catch (error) {
        console.error('Error retrieving data from database:', error);
        res.status(500).send('Internal Server Error');
    }
};