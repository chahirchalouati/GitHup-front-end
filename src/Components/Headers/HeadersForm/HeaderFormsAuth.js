import React from 'react'
import Logo from '../../Logos/Logo'


function HeaderFormsAuth({ text }) {
    return (
        <header>
            <Logo />
            <span>{text}</span>
        </header>
    )
}

export default HeaderFormsAuth
