import React, { useState } from 'react';
import Navbar from '../home/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import '../../scss/components/home/_writeForUs.scss';
import { Helmet } from "react-helmet";

const WriteForUs = () => {

  return (
    <>
     <Helmet>
        <title>BlogifyBlog - Write For Us</title>
        <meta
          name="description"
          content="Become a contributor on BlogifyBlog! Share your knowledge and insights on various topics. Explore diverse perspectives and engage with our community. Start your writing journey with BlogifyBlog - Write For Us."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="blog, articles, categories, tags, trends, insights, community, BlogifyBlog, Write For Us, contribute, guest posting, Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media"
        />
        <meta name="author" content="BlogifyBlog" />
        <meta
          property="og:title"
          content="BlogifyBlog - Write For Us"
        />
        <meta
          property="og:description"
          content="Become a contributor on BlogifyBlog! Share your knowledge and insights on various topics. Explore diverse perspectives and engage with our community. Start your writing journey with BlogifyBlog - Write For Us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blogifyblog.com/write-for-us" />
        <meta property="og:image" content="https://www.blogifyblog.com/app-image.png" />
        <meta
          property="article:tag"
          content="Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media"
        />
      </Helmet>
      <Navbar />
      <div className="contact-page">
        <div className="contact">
          <Toaster
            position={'bottom-center'}
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: '16px',
              },
            }}
          />

          <div className="card">
            <div className="contact-form">
              <h1>Write For Us</h1>
              <p>
                Welcome to BlogifyBlog, a platform that values diverse
                perspectives and insights from passionate writers like you! We
                believe in the power of sharing knowledge, experiences, and
                stories to inspire and educate our community.
              </p>

              <h4>Submission Guidelines:</h4>
              <ul>
                <li>
                  <strong>Article Length:</strong> Articles should be between
                  500 to 5000 words.
                </li>
                <li>
                  <strong>Unique Content:</strong> We prioritize uniqueness.
                  Ensure that your article is original and has not been
                  published elsewhere.
                </li>
                <li>
                  <strong>Pending Status:</strong> Submissions that are not
                  unique will be placed in pending status until further review.
                </li>
                <li>
                  <strong>Approval Process:</strong> Unique articles will be
                  reviewed by our administrators within 48 hours.
                </li>
              </ul>

              <h4>Free Guest Posting:</h4>
              <p>
                BlogifyBlog is a free guest posting site. Sub-Admins, like
                yourself, can contribute and publish articles without any cost.
                We value the expertise and diverse perspectives our
                contributors bring to our platform.
              </p>

              <h4>Contact Us:</h4>
              <p>
                Should you have any questions, suggestions, or need assistance,
                feel free to reach out to us through our{' '}
                <Link to="/contact">Contact Us</Link> page. We welcome
                collaboration and are here to support you throughout your
                writing journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteForUs;
