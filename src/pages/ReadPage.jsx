import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReadPage() {
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
			<div style={styles.loadingContainer}>
				<h2>Loading book details...</h2>
			</div>
		)
	}

	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<div style={styles.coverImage}>
					{book.formats?.['image/jpeg'] && (
						<a
							href={`https://www.gutenberg.org/ebooks/${book.id}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={book.formats['image/jpeg']}
								alt="Book Cover"
								style={styles.image}
							/>
						</a>
					)}
				</div>

				<div style={styles.cardContent}>
					<h1 style={styles.title}>{book.title}</h1>

					<div style={styles.section}>
						<strong>Authors:</strong>
						<ul style={styles.list}>
							{book.authors?.map((author, index) => (
								<li key={index} style={styles.listItem}>
									{author.name}
								</li>
							))}
						</ul>
					</div>

					<div style={styles.section}>
						<strong>Genres:</strong>
						<ul style={styles.list}>
							{book.subjects?.map((subject, index) => (
								<li key={index} style={styles.listItem}>
									{subject}
								</li>
							))}
						</ul>
					</div>

					<div style={styles.section}>
						<strong>Bookshelves:</strong>
						<ul style={styles.list}>
							{book.bookshelves?.map((shelf, index) => (
								<li key={index} style={styles.listItem}>
									{shelf}
								</li>
							))}
						</ul>
					</div>

					<div style={styles.section}>
						<strong>Languages:</strong>
						<ul style={styles.list}>
							{book.languages?.map((language, index) => (
								<li key={index} style={styles.listItem}>
									{language}
								</li>
							))}
						</ul>
					</div>

					<div style={styles.section}>
						<strong>Download Count:</strong> {book.download_count}
					</div>

					<div style={styles.section}>
						<strong>Copyright:</strong>{' '}
						{book.copyright ? 'Yes' : 'No'}
					</div>

					<div style={styles.section}>
						<strong>Media Type:</strong> {book.media_type}
					</div>
				</div>
			</div>
		</div>
	)
}

const styles = {
	container: {
		fontFamily: 'Arial, sans-serif',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		backgroundColor: '#000',
		color: '#fff',
		margin: '0',
		width: '100%'
	},
	loadingContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		width: '100%',
		backgroundColor: '#000',
		color: '#fff'
	},
	card: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#222',
		borderRadius: '10px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		padding: '20px',
		width: '100%',
		maxWidth: '1200px',
		height: '80vh',
		overflow: 'hidden'
	},
	coverImage: {
		flexShrink: 0,
		width: '150px',
		height: '225px',
		marginRight: '20px'
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		borderRadius: '8px'
	},
	cardContent: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'auto',
		maxHeight: '100%'
	},
	title: {
		fontSize: '2rem',
		color: '#fff',
		marginBottom: '20px',
		fontWeight: 'bold',
		wordBreak: 'break-word'
	},
	section: {
		marginBottom: '15px'
	},
	list: {
		listStyleType: 'none',
		padding: '0',
		margin: '0'
	},
	listItem: {
		fontSize: '1rem',
		color: '#ccc',
		marginBottom: '5px'
	}
}

export default ReadPage
