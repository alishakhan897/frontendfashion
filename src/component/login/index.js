import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import {
    LoginMainContainer, LoginSmallContainer, LoginHeading, FormContainer,
    ImageContainer, Image, FormSmallcontainer2, Form, InputContainer, Input2, Placeholder, Lable, Button2, Paragraphlogin , ErrorMsg , StyLink
} from './styledComponent';

class LoginPage extends Component {
    state = { email: "", password: "", showerrMsg: false, errMsg: '' , loggedIn: false }

    inputField = event => {
        this.setState({ email: event.target.value })
    }

    passwordField = event => {
        this.setState({ password: event.target.value })
    }

    onSubmitSuccess = jwtToken => {
        console.log('Received JWT token:', jwtToken);
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/',
        });

        localStorage.setItem('userEmail', this.state.email);

        this.setState({ loggedIn: true });
        toast.success("Login Successful");
    };
    

    
    onSubmitFailure = (errMsg) => {
        console.log(errMsg)
        this.setState({ showerrMsg: true, errMsg })
        toast.error("User not verified");
    }

    handleLogin = async event => {
        event.preventDefault(); // Prevent form submission
        const { email, password } = this.state;
 
        if (!email || !password) {
            console.error('Invalid email or password:', email, password);
            return;
        }

        const userDetails = { email, password };
        const url = "http://localhost:3000/login";
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
          
            if (response.ok) {
                if (data.verified) {
                    this.onSubmitSuccess(data.jwtToken);
                } else {
                    this.onSubmitFailure("User not verified");
                }
            } else {
                this.onSubmitFailure(data.error_msg || 'Invalid credentials');
            }
        } catch (error) {
            console.error("Error during login:", error);
            this.onSubmitFailure('An unexpected error occurred. Please try again later.');
        }
    };

    render() {
        const { email, password, showerrMsg, errMsg ,loggedIn } = this.state;


        // Redirect to the home page if the user is logged in
        

        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken) {
            return <Redirect to="/" />
        }
        return (
            <LoginMainContainer>
                <LoginSmallContainer>
                    <ToastContainer/>
                    <LoginHeading>Login </LoginHeading>
                    <FormContainer>
                        <ImageContainer>
                            <Image src="https://res.cloudinary.com/alishakhan987/image/upload/v1709971312/undraw_authentication_re_svpt_qieqsa.svg" />
                        </ImageContainer>
                        <FormSmallcontainer2>
                            <Form onSubmit={this.handleLogin}>
                                <InputContainer>
                                    <Lable>EMAIL</Lable>
                                    <Input2 type="text" placeholder="Enter your email" as={Placeholder} onChange={this.inputField} value={email} />
                                </InputContainer>

                                <InputContainer>
                                    <Lable>PASSWORD</Lable>
                                    <Input2 type="password" placeholder="Enter your password" as={Placeholder} onChange={this.passwordField} value={password} />
                                </InputContainer>
                                <Button2 type="submit">Submit</Button2>
                                {showerrMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
                                <Paragraphlogin>Don't have an account? <StyLink to="/register">Signup</StyLink></Paragraphlogin>
                            </Form>

                        </FormSmallcontainer2>


                    </FormContainer>
                </LoginSmallContainer>
            </LoginMainContainer>
        )
    }
}

export default LoginPage;
