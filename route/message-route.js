import express from 'express';
import { getMessages, addMessages, getMessageById, editMessage, deleteMessage } from '../controller/message-controller.js';


const routemessage= express.Router();







routemessage.get('/all-messages', getMessages)
routemessage.post('/add-message', addMessages)
routemessage.get('/all-messages/:id', getMessageById)
routemessage.put('/:id', editMessage)
routemessage.delete('/:id', deleteMessage)






export default routemessage ;