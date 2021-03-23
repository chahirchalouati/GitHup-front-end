import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { resetSignUpState } from '../application/action/AuthenticationAction'
import FooterForm from '../Components/Footers/FooterForm'
import SignInForm from '../Components/Forms/SignInForm'
import HeaderFormsAuth from '../Components/Headers/HeadersForm/HeaderFormsAuth'

function SignIn({ match }) {

    const { state } = useLocation();
    console.log(state);
    const dispatch = useDispatch();
    return (
        <div className='signin_page'>

            <HeaderFormsAuth text={"Sign in to GitHup"} />
            <main>
                <SignInForm message={state ? state.message : null}></SignInForm>
                <div className="new_to">
                    <span>New to GitHub? </span>
                    <Link onClick={e => { dispatch(resetSignUpState()) }} to={"/signup"}>Create an account.</Link>
                </div>
            </main>
            <FooterForm />
        </div>
    )
}

export default SignIn
