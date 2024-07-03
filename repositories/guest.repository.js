import Guest from "../models/guest.model.js";



export const getallGuest = async()=>{
    try {
        const guestData = await Guest.find()
        return guestData;

    } catch (error) {
        throw error;
    }
};

export const getTotalGuest = async()=>{
    try {
        const totalGuest = await Guest.countDocuments();
        return totalGuest;
    } catch (error) {
        throw error;
    }
}

export const getGuestById = async (id) => {
    try {
        const guest = await Guest.findById(id);
        if (!guest) {
            throw new Error('Guest not found');
        }
        return guest;
    } catch (error) {
        throw error;
    }
};