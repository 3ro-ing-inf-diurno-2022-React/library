import React from 'react'
import { Link, useParams } from 'react-router-dom'
import findBookById from '../utils/findBookById'

function BookDetailsComponent() {
    const { bookId } = useParams()
    const book = findBookById(bookId)

    if (!book) {
        return (
            <p>
                Lo sentimos, este libro no esta disponible...
                <Link to="/books">
                    Ir atras
                </Link>
            </p>
        )
    }
    return (
        <div>
            <Link to='/books'>
                Ir atras
            </Link>
            <h1>
                {book.name}
            </h1>
            <small>
                Una novela por {book.author} escrita en {book.year}
            </small>
            <p>
                {book.description}
            </p>
            <p>
                Este libro cuent con {book.likes} de likes
            </p>
        </div>
    )

}

export default BookDetailsComponent



