import React from "react";
import { useForm } from "react-hook-form";

function ResetPasswordForm() { 
  
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className='reset_in_form'>
      <p>
        Enter your user account's verified email address and we will send you a
        password reset link.
      </p>

      <div className="input_box">
        <div className="label">
          <span>Enter your email address</span>
        </div>
        <input type="text" name="Enter your email address" />
      </div>

      <button className="btn_primary">send password reset email</button>
    </form>
  );
}

export default ResetPasswordForm;
