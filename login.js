import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', { email, password })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                window.location.href = '/';
            })
            .catch(error => console.log(error));
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "email"
        placeholder = "Email"
        onChange = {
            (e) => setEmail(e.target.value) }
        required / >
        <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        required / >
        <
        button type = "submit" > Login < /button> <
        /form>
    );
};

export default Login;