import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { usernameConfig, passwordConfig } from '../../utils/userValidationRules';
import './styles.css';

const Login = () => {
    const { register, handleSubmit, /* watch, */ errors } = useForm()
    const onSubmit = data => console.log('submit event!');

    // console.log(watch('username'));

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title">Login Form</h2>
                
                <div className="input-container"> {/* Username input */}
                    <i className="fa fa-user icon"></i>
                    <input className="input-field" type="text" name="username"
                            placeholder="Who are you?" ref={ register(usernameConfig) }/>
                </div>

                { errors.username && /* Username error */
                    <div className="alert alert-danger">{errors.username.message}</div>
                }

                <div className="input-container"> {/* Password input */}
                    <i className="fa fa-key icon"></i>
                    <input className="input-field" type="password" name="password"
                            placeholder="What's your password?" ref={ register(passwordConfig) }/>
                </div>

                { errors.password && /* Password error */
                    <div className="alert alert-danger">{errors.password.message}</div>
                }

                <div className="btns-login">
                    <button type="button" className="btn">Come back</button>
                    <button type="submit" className="btn">Explore</button>
                </div>

                <a href="#" className="links">Let me introduce my self</a>
            </form>
        </div>
    );
}

export default Login;
