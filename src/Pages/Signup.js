import React, { useEffect } from "react";
import FooterForm from "../Components/Footers/FooterForm";
import SignUpForm from "../Components/Forms/SignUpForm";
import HeaderFormsAuth from "../Components/Headers/HeadersForm/HeaderFormsAuth";
import HomeNav from "../Components/Navs/HomeNav";

function Signup() {

return (
        <div className="signin_page">
            <HomeNav />
            <HeaderFormsAuth text={"Create your account"} />
            <main>
                <SignUpForm />
            </main>
            <FooterForm />
        </div>
    );
}

export default Signup;
