import { useEffect, useState } from 'react'
import { Book } from '../components/Book'

export default function HomePage() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBooks() {
            const response = await fetch('https://gutendex.com/books')
            const data = await response.json()
            setBooks(data.results)
            setLoading(false)
        }

        fetchBooks()
    }, [])

    if (loading) {
        return (
            <div className='loadingContainer'>
                <h2>Loading books...</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Books from Gutenberg</h1>
            <ul>
                {books.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
        </div>
    )


}
