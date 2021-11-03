import React, { useState, useRef, useEffect, useCallback } from 'react';
import "../stylesheets/SignInModal.css"
import { useSpring, animated } from 'react-spring';
//npm install react-spring
import { MdClose } from 'react-icons/md';
// npm install material-design-icons
// npm install react-icons

const SignInModal = ({ showSignIn, setShowSignIn }) => {

    const modalRef = useRef();

    const [showSignUp, setShowSignUp] = useState(false);

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
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    return (
        <>
            {showSignIn ? (
                <div className='Background' onClick={closeModal} ref={modalRef}>
                    <animated.div >
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
                                        type='text'
                                        name='Email'
                                        placeholder='Email'
                                    />
                                </div>
                                : null}
                                <div className='form-inputs'>
                                    <input
                                        className='form-input'
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                    />
                                </div>
                                <div className='form-inputs'>
                                    <input
                                        className='form-input'
                                        type='text'
                                        name='username'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='sign-in-options'>
                                    <div className='account-links'>
                                        {showSignUp ? null : <div className='individual'>Forgot password?</div>}
                                        <div onClick={openSignUp} className='individual'>{showSignUp ? 'Already have account? Login' : 'Register account'}</div>
                                    </div>
                                </div>
                                <button type="button" className="sign-in-button">{showSignUp ? 'Sign up' : 'Login'}</button>
                            </div>

                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
}

export default SignInModal
