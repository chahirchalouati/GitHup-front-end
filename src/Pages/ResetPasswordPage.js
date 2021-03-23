import React from "react";
import FooterForm from "../Components/Footers/FooterForm";
import ResetPasswordForm from "../Components/Forms/ResetPasswordForm";
import HeaderFormsAuth from "../Components/Headers/HeadersForm/HeaderFormsAuth";

function ResetPasswordPage() {
    return (
        <div className="signin_page">
            <HeaderFormsAuth text={"Reset your password"} />
            <main>
                <ResetPasswordForm />
            </main>
            <FooterForm />
        </div>
    );
}

export default ResetPasswordPage;
