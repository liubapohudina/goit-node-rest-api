import { listContacts, addContact, getContactById, removeContact } from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
    try {
        const allContacts = await listContacts();
        res.json(allContacts);
    } catch (error) {
        next(error);
    }
};

export const getOneContact =  async(req, res, next) => {
    try {
        console.log(req.params)
        const { id } = req.params;
        const result = await getContactById(id);
        if (!result) {
            throw HttpError('404', "Contacts with this id is undefinded")
        }
        res.json(result);
    } catch (error) {
        next(error);
    }

};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};