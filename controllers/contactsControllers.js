import { listContacts } from "../services/contactsServices.js";


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
        const { id } = req.params;
        const result = await getContactById(id);
        if (!result) {
            throw HttpError('404', "Not found")
        }
        res.json(result);
    } catch (error) {
        next(error);
    }

};

export const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await removeContact(id);
        if (!result) {
            throw HttpError('404', "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error)
    }
};

export const createContact = async (req, res, next) => {
    try {
        const result = await addContact(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
};

export const updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (Object.keys(req.body).length === 0) {
            throw HttpError('400', "Body must have at least one field")
        }
        const result = await updateCont(id, req.body);
         if (!result) {
            throw HttpError('404', "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};