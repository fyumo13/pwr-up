import React, { useState } from 'react';

import { register } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { Form, FormHeader, FormGroup, FormInput } from '../shared/Form';
import { TextLink } from '../shared/TextLink';

export default function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        register(user)
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            <FormHeader>
                <h1>Create your account.</h1>
            </FormHeader>
            <FormGroup>
                <FormInput
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                />
            </FormGroup>
            <FormGroup>
                <FormInput
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                />
            </FormGroup>
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
            <Button as="button" type="submit" bg="primary" color="light" size="md">Register</Button>
            <p>Already have an account? <TextLink to="/login">Log in.</TextLink></p>
        </Form>
    );
}