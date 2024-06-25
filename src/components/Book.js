import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './components.css'

function Book() {

    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`https://softwium.com/api/books/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBook(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Book not found</div>;
    }


    return (
        <div className='bookapp_book_details'>
            <div className="book_img">
                <img src="./bookimg.png" alt="" />
            </div>
            <div className="book_details">
                <h1>{book.title}</h1>
            </div>
        </div>
    )
}

export default Book