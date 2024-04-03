
import Contact from '../models/Contacts.js';

export const listContacts = (filter, setting) => Contact.find(filter, null, setting);
export const addContact = data => Contact.create(data);
export const getContactById = filter => Contact.findOne(filter);
export const removeContact = filter => Contact.findByIdAndDelete(filter);
export const updateCont = (filter, data) => Contact.findOneAndUpdate(filter, data, {new: true});

