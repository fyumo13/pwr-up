import React, { useState } from 'react';

import { login } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { Form, FormHeader, FormGroup, FormInput } from '../shared/Form';
import { TextLink } from '../shared/TextLink';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        login(user)
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            <FormHeader>
                <h1>Log in to PWR-UP</h1>
            </FormHeader>
            <FormGroup>
                <FormInput
                    type="email"
                    id="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </FormGroup>
            <FormGroup>
                <FormInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
            </FormGroup>
            <Button as="button" type="submit" bg="primary" color="light" size="md">Log In</Button>
            <p>Don't have an account yet? <TextLink to="/register">Register now.</TextLink></p>
        </Form>
    );
}
