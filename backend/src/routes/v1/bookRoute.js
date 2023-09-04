import express from 'express'

import { createBook, findAllBooks, findBookById, updateBook, deleteBook } from '../../controllers/bookController.js'

const router = express.Router();

router.get('/books', findAllBooks);
router.get('/books/:id', findBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export { router }
