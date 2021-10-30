import React, { useRef, useEffect, useCallback } from 'react';
import "../stylesheets/SignInModal.css"
import { useSpring, animated } from 'react-spring';
//npm install react-spring
import {MdClose} from 'react-icons/md';
// npm install material-design-icons

const SignInModal = ({ showSignIn, setShowSignIn }) => {

    const modalRef = useRef();

      const animation = useSpring({
        config: {
          duration: 175
        },
        opacity: showSignIn ? 1 : 0,
        transform: showSignIn ? `translateY(0%)` : `translateY(+100%)`
      });

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
                    <animated.div style={animation}>
                        <div className='ModalWrapper' showSignIn={showSignIn}>
                            <MdClose
                                aria-label='Close modal'
                                className='close-modal'
                                onClick={() => setShowSignIn(prev => !prev)}
                            />
                            <div className='ModalContent'>
                                <h1>Sign In</h1>
                                <p>Sign in and start tracking your typing skills!</p>
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
                                    <div className='remember-me'>
                                        <input className='check-box' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <label for="vehicle1"> I have a bike</label>
                                    </div>
                                    <div className='account-links'>   
                                        <div className='individual'>Forgot password?</div>
                                        <div className='individual'>Register account</div>
                                    </div>
                                </div>
                                <button type="button" className="sign-in-button">Join Now</button>
                            </div>

                        </div>
                    </animated.div>
                </div>
            ) : null}
        </>
    );
}

export default SignInModal
