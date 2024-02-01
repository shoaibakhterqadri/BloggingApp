// WriteForUs.jsx

import React, { useState } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaUser, FaEnvelope, FaBook } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/authAction';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import '../../scss/components/home/_writeForUs.scss';

const WriteForUs = () => {
  const dispatch = useDispatch();
  const { errorMessage, loader } = useSelector((state) => state.adminReducer);
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    image: '',
  });

  const [showImage, setShowImage] = useState('');

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const imageHandle = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        image: e.target.files[0],
      });

      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const user_register = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('subject', state.subject);
    formData.append('image', state.image);

    dispatch(register(formData));
  };

  return (
    <>
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
                Welcome to [Your Blog Name], a platform that values diverse
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
                [Your Blog Name] is a free guest posting site. Sub-Admins, like
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

              <form>
                {/* Your form inputs go here */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteForUs;
