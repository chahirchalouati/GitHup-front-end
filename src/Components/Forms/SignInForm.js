import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { SignInRequest } from "../../application/Services/AuthService";

function SignInForm({ message }) {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const { RX_AUTH } = useSelector(state => state);
    const onSubmit = data => dispatch(SignInRequest(data));
    return (
        <form className="sign_in_form" onSubmit={handleSubmit(onSubmit)}>

            {message && <h5 style={{color:'green',textTransform:'capitalize', fontWeight:'bold', fontSize:'13px', padding:'0.5em', width:'100%'}}>{message}</h5>}

            <div className="input_box">
                <div className='label'><span>Username or email address</span></div>
                <input type="text" name="param" ref={register({ required: true, })} />
                {errors.param && <span className="error_form">Username or email is required</span>}
            </div>
            <div className="input_box">
                <div className='label'><span>Password</span> <Link to='/forgot-password'>Forgot password?</Link></div>
                <input type="password" name="password" ref={register({ required: true, })} />
                {errors.password && <span className="error_form">Password is required</span>}
            </div>
            <button type='submit' className='btn_primary'>Sign in</button>
        </form>
    )
}

export default SignInForm
