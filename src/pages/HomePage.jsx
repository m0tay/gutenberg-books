import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function HomePage() {
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

	if (loading) return <div>Loading...</div>

	return (
		<div>
			<h1>Books from Gutenberg</h1>
			<ul>
				{books.map((book) => (
					<li
						key={book.id}
						style={{
							display: 'flex',
							margin: '20px 0',
							border: '1px solid #ddd',
							borderRadius: '8px',
							padding: '10px'
						}}
					>
						<img
							src={book.formats['image/jpeg']}
							alt={book.title}
							style={{
								width: '100px',
								height: '150px',
								objectFit: 'cover',
								marginRight: '20px',
								borderRadius: '4px'
							}}
						/>
						<div>
							<Link
								to={`/read/${book.id}`}
								style={{
									fontSize: '1.2rem',
									fontWeight: 'bold',
									color: '#007bff',
									textDecoration: 'none'
								}}
							>
								{book.title}
							</Link>
							<div
								style={{ marginTop: '10px', fontSize: '1rem' }}
							>
								<strong>Authors:</strong>{' '}
								{book.authors
									.map((author) => author.name)
									.join(', ')}
							</div>
							<div style={{ fontSize: '1rem' }}>
								<strong>Genres:</strong>{' '}
								{book.subjects.join(', ')}
							</div>
							<div style={{ fontSize: '1rem' }}>
								<strong>Bookshelves:</strong>{' '}
								{book.bookshelves.join(', ')}
							</div>
							<div style={{ fontSize: '1rem' }}>
								<strong>Languages:</strong>{' '}
								{book.languages.join(', ')}
							</div>
							<div style={{ fontSize: '1rem' }}>
								<strong>Download Count:</strong>{' '}
								{book.download_count}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default HomePage
