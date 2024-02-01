import React, { useState } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaLock, FaUser, FaEnvelope, FaBook } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { contactInfo } from '../../store/actions/home/contactAction';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '../../scss/components/home/_contact.scss';

const Contact = () => {
  const dispatch = useDispatch();
  const { errorMessage, successMessage } = useSelector(
    (state) => state.contactReducer
  );
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const contactUs = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!state.name || !state.email || !state.subject || !state.message) {
      toast.error('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('email', state.email);
    formData.append('subject', state.subject);
    formData.append('message', state.message);

    dispatch(contactInfo(formData));
    setState({
              name: '',
              email: '',
              subject: '',
              message: '',
            });

    if (successMessage) {
        toast.success(successMessage);
        dispatch({ type: 'CONTACT_SUCCESS' });

        setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
};
useEffect(() => {
  if (errorMessage) {
    toast.error(errorMessage);
    dispatch({ type: 'CONTACT_FAIL' });
  }
}, [successMessage, errorMessage]);


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
              <h1>Contact Us</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="userName">User Name</label>
                  <div className="icon-input">
                    <div className="icon">
                      <FaUser />
                    </div>
                    <input
                      onChange={inputHandle}
                      type="text"
                      name="name"
                      id="userName"
                      placeholder="user name"
                      className="form-control"
                      value={state.name}
                    />
                  </div>
                  {/* <p>{errorMessage?.name}</p> */}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="icon-input">
                    <div className="icon">
                      <BsAt />
                    </div>
                    <input
                      onChange={inputHandle}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      className="form-control"
                      value={state.email}
                    />
                  </div>
                  {/* <p>{errorMessage?.email}</p> */}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="icon-input">
                    <div className="icon">
                      <FaBook />
                    </div>
                    <input
                      onChange={inputHandle}
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="subject"
                      className="form-control"
                      value={state.subject}
                    />
                  </div>
                  {/* <p>{errorMessage?.subject}</p> */}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="icon-input">
                    <div className="icon">
                      <FaEnvelope />
                    </div>
                    <textarea
                      onChange={inputHandle}
                      name="message"
                      id="message"
                      placeholder="Write your Message"
                      className="form-control"
                      style={{ width: '100%', height: '100px' }}
                      value={state.message}
                    />
                  </div>
                  {/* <p>{errorMessage?.message}</p> */}
                </div>
                <div className="form-group">
                  <button onClick={contactUs} className="btn btn-block">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
