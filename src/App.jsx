import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReadPage from './pages/ReadPage'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/read/:bookId" element={<ReadPage />} />
        </Routes>
    )
}
