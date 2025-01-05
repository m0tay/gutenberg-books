import { Link } from "react-router-dom"
import '../styles.css'

export function Book({ book }) {
    return (
        <li key={book.id} className="bookItem">
            <img
                src={book.formats['image/jpeg'] || '/default-image.jpg'}
                alt={book.title || 'No Title'}
                className="bookImage"
            />
            <div className="bookDetails">
                <Link to={`/read/${book.id}`} className="bookTitle">
                    {book.title}
                </Link>
                <div className="bookInfo">
                    <strong>Authors:</strong>{' '}
                    {book.authors.map((author) => author.name).join(', ')}
                </div>
                <div className="bookInfo">
                    <strong>Genres:</strong>{' '}
                    {book.subjects.join(', ')}
                </div>
                <div className="bookInfo">
                    <strong>Bookshelves:</strong>{' '}
                    {book.bookshelves.join(', ')}
                </div>
                <div className="bookInfo">
                    <strong>Languages:</strong>{' '}
                    {book.languages.join(', ')}
                </div>
                <div className="bookInfo">
                    <strong>Download Count:</strong>{' '}
                    {book.download_count}
                </div>
            </div>
        </li>
    )
}
