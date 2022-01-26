import bookList from '../books.json';

function findBookById(bookId) {
    return bookList.books.find(book => book.id === Number(bookId)) || null
}

export default findBookById

