import { BookModel } from '../models/book.model.js';

//POST BOOKS
const createBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        /**
         *  VALIDATE BODY
         */
        if (!title || !author || !publishYear) {
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear' })
        }

        const _book = {
            title,
            author,
            publishYear
        }

        const book = await BookModel.create(_book);

        res.status(201).send(book);
    } catch (error) {
        console.log({ error });
        res.status(500).send({ message: error.message });
    }
};

//DELETE BOOK BY ID
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await BookModel.findByIdAndDelete(id);

        if (deletedBook) {
            res.send({ status: 200, message: { id } })
        } else {
            res.status(404).json({ status: 404, message: { id } })
        }
    } catch (error) {
        console.log({ error });
        res.status(500).send({ message: error.message });
    }
};

//GET BOOKS
const findAllBooks = async (req, res) => {
    try {
        let booksArr = await BookModel.find({});

        res.send({
            count: booksArr.length,
            data: booksArr
        });
    } catch (error) {
        console.log({ error });
        res.status(500).send({ message: error.message });
    }
};

//GET BOOK BY ID
const findBookById = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await BookModel.findById(id);

        res.send(book)
    } catch (error) {
        console.log({ error });
        res.status(500).send({ message: error.message });
    }
};


//PUT UPDATE A BOOK BY ID
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, publishYear } = req.body;

        /**
         *  VALIDATE BODY
         */
        if (!title || !author || !publishYear) {
            return res.status(400).send({ message: 'Send all required fields: title, author, publishYear' })
        }

        const _book = {
            title,
            author,
            publishYear
        }

        const updateBook = await BookModel.findByIdAndUpdate(id, _book);

        if (updateBook) {
            res.send({ status: 200, message: { id } })
        } else {
            res.status(404).json({ status: 404, message: { id } })
        }

    } catch (error) {
        console.log({ error });
        res.status(500).send({ message: error.message });
    }
};

export {
    createBook,
    findAllBooks,
    findBookById,
    updateBook,
    deleteBook
}