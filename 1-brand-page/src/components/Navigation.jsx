import React from 'react'

function navigation() {
  return (
    <div>
        <nav>

            <div className='logo'>
                <img src="https://nikecompanyblog.wordpress.com/wp-content/uploads/2015/05/nike1.jpg" alt="logo" />
            </div>

            <ul>
                <li href="#">Home</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>

        </nav>
    </div>
  )
}

export default navigation
