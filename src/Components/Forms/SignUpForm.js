import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SignUpRequest } from '../../application/Services/AuthService';
import RouterHistory from '../../Routes/History';

function SignUpForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const { RX_AUTH: { signUpStart, signUpSuccess, signUpFail, error, } } = useSelector(state => state);
    const onSubmit = data => dispatch(SignUpRequest(data));

    useEffect(() => {

        signUpSuccess && RouterHistory.push({ pathname: '/', state: { message: "your account was created with success" } });

    }, [signUpSuccess]);


    return (
        <form className='sign_up_form' onSubmit={handleSubmit(onSubmit)}>
            <div className="input_box">
                <div className='label'><span>Username</span></div>
                <input type="text" name="username" ref={register({ required: true })} />
                {errors.username && <span className="error_form">username is required</span>}
            </div>
            <div className="input_box">
                <div className='label'><span>E-mail address</span></div>
                <input type="email" name="email" ref={register({ required: true })} />
                {errors.email && <span className="error_form">email is required</span>}
            </div>
            <div className="input_box">
                <div className='label'><span>Password</span> </div>
                <input className='error' type="password" name="password" ref={register({ required: true })} />
                {errors.password && <span className="error_form">password is required</span>}

                <small className='password_info'>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</small>
                <Link to={"/learn-more"} className='password_info'>Learn more.</Link>

            </div>
            <button type='submit' className='btn_primary' disabled={signUpStart}>{signUpStart ? "Creating your account" : "Create account"}</button>

            <p className='password_info'>By creating an account, you agree to the Terms of Service. For more information about GitHub's privacy practices, see the GitHub Privacy Statement. We'll occasionally send you account-related emails.</p>

        </form>
    )
}

export default SignUpForm
