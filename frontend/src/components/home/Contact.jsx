import React, { useState } from 'react';
import { BsAt } from 'react-icons/bs';
import { FaLock, FaUser,FaEnvelope,FaBook } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../store/actions/authAction'
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'
import '../../scss/components/home/_contact.scss';

const Contact = () => {

    const dispatch = useDispatch();
    const { errorMessage, successMessage, loader,authenticate } = useSelector(state => state.adminReducer)
    const [state, setState] = useState({
        name: "",
        email: '',
        subject: '',
        image: ''
    })

    const [showImage, setShowImage] = useState("")

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const imageHandle = (e) => {
        if (e.target.files.length !== 0) {
            setState({
                ...state,
                image: e.target.files[0]
            })

            const rander = new FileReader()
            rander.onload = () => {
                setShowImage(rander.result)
            }
            rander.readAsDataURL(e.target.files[0])
        }
    }

    const user_register = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', state.name)
        formData.append('email', state.email)
        formData.append('subject', state.subject)
        formData.append('image', state.image)

        dispatch(register(formData))
    }
    useEffect(() => {
        // if(authenticate){
        //     history.push('/dashborad')
        // }
        // if (successMessage) {
        //     history.push('/register/email-verify')
        // }
        if (errorMessage.error) {
            toast.error(errorMessage.error)
            dispatch({ type: 'ERROR_CLEAR' })
        }
    }, [successMessage, errorMessage?.error, authenticate])
    useEffect(() => {
        dispatch({ type: 'ERROR_CLEAR' })
    }, [])
    return <>
        <Navbar />
        <div className="contact-page">
        <div className="contact">
            <Toaster
                position={'bottom-center'}
                reverseOrder={false}
                toastOptions={{
                    style: {
                        fontSize: '16px'
                    }
                }}
            />

            <div className="card">
                <div className="contact-form">
                    <h3>Contact US</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <div className="icon-input">
                                <div className="icon"><FaUser /></div>
                                <input onChange={inputHandle} type="text" name='name' id='userName' placeholder='user name' className="form-control" />
                            </div>
                            <p>{errorMessage?.name}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="icon-input">
                                <div className="icon"><BsAt /></div>
                                <input onChange={inputHandle} type="email" name='email' id='email' placeholder='email' className="form-control" />
                            </div>
                            <p>{errorMessage?.email}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <div className="icon-input">
                                <div className="icon"><FaBook /></div>
                                <input onChange={inputHandle} type="subject" name='subject' id='subject' placeholder='subject' className="form-control" />
                            </div>
                            <p>{errorMessage?.subject}</p>
                        </div>
                        <div className="form-group">
                        <label htmlFor="message">Message</label>
                            <div className="icon-input">
                                <div className="icon"><FaEnvelope /></div>
                                <textarea onChange={inputHandle} name='message' id='message' placeholder='Write your Message' className="form-control" style={{ width: '100%', height: '100px' }} />
                            </div>
                            <p>{errorMessage?.subject}</p>
                        </div>
                        <div className="form-group">
                            {
                                loader ? <button className="btn btn-block">
                                    <div className="spinner">
                                        <div className="spinner1"></div>
                                        <div className="spinner2"></div>
                                        <div className="spinner3"></div>
                                    </div>
                                </button> : <button onClick={user_register} className="btn btn-block">
                                    Submit
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </>;
};

export default Contact;
