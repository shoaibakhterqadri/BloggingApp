import React from 'react'
import Navbar from './Navbar'
import "../../scss/components/home/NotFound.scss";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
     <Helmet>
                <title>BlogifyBlog - Not Found</title>
                <meta name="description" content="Explore a diverse world of knowledge on BlogifyBlog. Immerse yourself in a vast array of categories and tags, covering topics from technology and science to health, business, and entertainment. Read, learn, and contribute by publishing your own articles. Join our thriving community where curiosity meets expertise. Start your journey with BlogifyBlog today!" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="blog, articles, categories, tags, trends, insights, community, BlogifyBlog, Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media" />
                <meta name="author" content="BlogifyBlog" />
                <meta property="og:title" content="BlogifyBlog - Home" />
                <meta property="og:description" content="Explore a diverse world of knowledge on BlogifyBlog. Immerse yourself in a vast array of categories and tags, covering topics from technology and science to health, business, and entertainment. Read, learn, and contribute by publishing your own articles. Join our thriving community where curiosity meets expertise. Start your journey with BlogifyBlog today!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blogifyblog.com"/>
                <meta property="og:image" content="https://www.blogifyblog.com/app-image.png"/>
                <meta property="article:tag" content="Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media" />
        </Helmet>
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