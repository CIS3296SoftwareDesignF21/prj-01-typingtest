import React, { useState, useRef, useEffect, useCallback } from 'react';
import useForm from './useForm';
import validate from './validateInfo'
import "../stylesheets/SignInModal.css"
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
// import * as db from '../utils/dbUtils.js';

const SignInModal = ({ onLogin, showSignIn, setShowSignIn }) => {

    const modalRef = useRef();

    const [showSignUp, setShowSignUp] = useState(false);

    const request = require('postman-request');

    const options = {
        url: 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/getaccbyid?accId=7',
    };

    function login(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            console.log(info);
            // id, display_name, user_email, password, photo
            if(info !== []){
                console.log("STATUS: Login Success");
                onLogin(
                    info[0].account_id,
                    info[0].display_name,
                    info[0].user_email,
                    info[0].password,
                    info[0].photo)
            }
        }
    }

    function signup(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            console.log(info);
        }
    }

    const test = () => {
        request(options, login);
    }

    function submitForm() {

        console.log("works");

        options.url = 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/login?email='
            + values.username
            + '&pw=' + values.password;

        test();

        setShowSignIn(false);
        values.email = '';
        values.username = '';
        values.password = '';
        values.password2 = '';
    }

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const animation = useSpring({
        config: {
            duration: 175
        },
        opacity: showSignIn ? 1 : 0,
        transform: showSignIn ? `translateY(0%)` : `translateY(+100%)`
    });

    const openSignUp = () => {
        setShowSignUp(prev => !prev);
    };

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowSignIn(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showSignIn) {
                setShowSignIn(false);
                console.log('I pressed');
            }
        },
        [setShowSignIn, showSignIn]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            // db.initCon();

            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    return (
        <>
            {showSignIn ? (
                <div className='Background' onClick={closeModal} ref={modalRef}>
                    <animated.div >
                        <form onSubmit={handleSubmit} noValidate>
                            <div className='ModalWrapper' showSignIn={showSignIn}>
                                <MdClose
                                    aria-label='Close modal'
                                    className='close-modal'
                                    onClick={() => setShowSignIn(prev => !prev)}
                                />
                                <div className='ModalContent'>
                                    {showSignUp ? <h1>Sign Up</h1> : <h1>Login</h1>}

                                    {showSignUp ? <div className='form-inputs'>
                                        <input
                                            className='form-input'
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="errors">{errors.email}</p>}
                                    </div>
                                        : null}
                                    <div className='form-inputs'>
                                        <input
                                            className='form-input'
                                            type='text'
                                            name='username'
                                            placeholder='Username'
                                            value={values.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && <p className="errors">{errors.username}</p>}
                                    </div>
                                    <div className='form-inputs'>
                                        <input
                                            className='form-input'
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <p className="errors">{errors.password}</p>}
                                    </div>
                                    {showSignUp ? <div className='form-inputs'>
                                        <input
                                            className='form-input'
                                            type='password'
                                            name='password2'
                                            placeholder='Confirm Password'
                                            value={values.password2}
                                            onChange={handleChange}
                                        />
                                        {errors.password2 && <p className="errors">{errors.password2}</p>}
                                    </div>
                                        : null}
                                    <div className='sign-in-options'>
                                        <div className='account-links'>
                                            {showSignUp ? null : <div className='individual'>Forgot password?</div>}
                                            <div onClick={openSignUp} className='individual'>{showSignUp ? 'Already have account? Login' : 'Register account'}</div>
                                        </div>
                                    </div>
                                    <button type="submit" className="sign-in-button">{showSignUp ? 'Sign up' : 'Login'}</button>
                                </div>

                            </div>
                        </form>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
}

export default SignInModal
