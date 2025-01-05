import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles.css'

export default function ReadPage() {
    const { bookId } = useParams()
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBookData() {
            const response = await fetch(
                `https://gutendex.com/books/${bookId}/`
            )
            const bookData = await response.json()
            setBook(bookData)
            setLoading(false)
        }

        fetchBookData()
    }, [bookId])

    if (loading) {
        return (
            <div className="loadingContainer">
                <h2>Loading book details...</h2>
            </div>
        )
    }

    return (
        <div className="container flexColumn">
            <div className="card">
                <div className="coverImage">
                    {book.formats?.['image/jpeg'] && (
                        <a
                            href={`https://www.gutenberg.org/ebooks/${book.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={book.formats['image/jpeg']}
                                alt="Book Cover"
                                className="image"
                            />
                        </a>
                    )}
                </div>

                <div className="cardContent">
                    <h1 className="title">{book.title}</h1>
                    <div className='twoColumnContainer'>
                        <div>
                            <div className="section">
                                <strong>Authors:</strong>
                                <ul className="list">
                                    {book.authors?.map((author, index) => (
                                        <li key={index} className="listItem">
                                            {author.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="section">
                                <strong>Genres:</strong>
                                <ul className="list">
                                    {book.subjects?.map((subject, index) => (
                                        <li key={index} className="listItem">
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="section">
                                <strong>Bookshelves:</strong>
                                <ul className="list">
                                    {book.bookshelves?.map((shelf, index) => (
                                        <li key={index} className="listItem">
                                            {shelf}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="section">
                                <strong>Languages:</strong>
                                <ul className="list">
                                    {book.languages?.map((language, index) => (
                                        <li key={index} className="listItem">
                                            {language}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="section">
                                <strong>Download Count:</strong> {book.download_count}
                            </div>

                            <div className="section">
                                <strong>Copyright:</strong>{' '}
                                {book.copyright ? 'Yes' : 'No'}
                            </div>

                            <div className="section">
                                <strong>Media Type:</strong> {book.media_type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/'} className='linkStyle'>
                Go back
            </Link>
        </div>
    )
}
