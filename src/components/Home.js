import React from 'react'
import './components.css'

function Home() {
    return (
        <div className='bookapp_home'>
            <div className="bookapp_home_content">
                <h1>Welcome to BookApp</h1>
                <p>Browse the books of your choise by clicking on below button</p>

                <button>Browse Books</button>
            </div>
            <div className="bookapp_home_image">
                <img src="./bookimg.png" alt="" />
            </div>
        </div>
    )
}

export default Home