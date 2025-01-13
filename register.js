import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', { username, email, password })
            .then(response => {
                window.location.href = '/login';
            })
            .catch(error => console.log(error));
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Username"
        onChange = {
            (e) => setUsername(e.target.value) }
        required / >
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
        button type = "submit" > Register < /button> <
        /form>
    );
};

export default Register;