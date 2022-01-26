import React from 'react'
import { Link } from 'react-router-dom';

import bookList from '../books.json';

function BooksComponent() {
    return (
        <div>
            <h1>
                Book list
            </h1>
            <ul>
                {bookList.books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            <h3>
                                {book.name}
                            </h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BooksComponent
