import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './components.css'

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('https://softwium.com/api/books');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='bookapp_books_container'>

            {
                books.map((e) => {
                    return (
                        <div className="book">
                            <img src="./bookimg.png" alt="" />
                            <Link to={`/book/${e.id}`}><h3>{e.title.substring(0, 15)}...</h3></Link>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Books