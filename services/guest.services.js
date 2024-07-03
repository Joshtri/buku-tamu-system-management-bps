import * as guestRepository from '../repositories/guest.repository.js';

export const getAllGuest = async()=>{
    try {
       
        const guestData = await guestRepository.getallGuest();
        // return guestData;
        // const totalDocuments = await guestRepository.getTotalGuest();

        return guestData;
    } catch (error) {
        throw error;
    }
};

export const getGuestById = async (id) => {
    try {
        const guest = await guestRepository.getGuestById(id);
        if (!guest) {
            throw new Error('Guest not found');
        }
        return guest;
    } catch (error) {
        throw error;
    }
};