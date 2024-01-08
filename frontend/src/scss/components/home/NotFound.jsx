import React from 'react'
import Navbar from './Navbar'
import "../../scss/components/home/NotFound.scss";


function NotFound() {
  return (
    <>
    <Navbar />
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
        <p>It seems like you're lost in the digital wilderness.</p>
        <a href="/">Go back to the home page</a>
      </div>
    </div>
    </>
  )
}

export default NotFound