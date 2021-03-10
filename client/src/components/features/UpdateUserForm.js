import React, { useState, useEffect } from 'react';

import { fetchUser, updateUser, deleteUser } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { Form, FormHeader, FormGroup, FormInput } from '../shared/Form';
import { Grid } from '../layout/Grid';

import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg';

export default function UpdateUserForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        fetchUser()
            .then(res => {
                setFirstName(res.data.user.firstName);
                setLastName(res.data.user.lastName);
                setEmail(res.data.user.email);
            })
            .catch(err => {
                setErrors(err.message);
            });
    }, []);

    const handleSubmit = (e) => {
        const update = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        updateUser(update)
            .then(res => {
                setSuccess(res.data.message);
            })
            .catch(err => {
                setErrors(err.message);
            });
    }

    const handleClick = () => {
        deleteUser()
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            { success ? <Alert status="success" color="dark">{success}</Alert> : null }
            <FormHeader>
                <h3>Update your profile</h3>
                <DeleteIcon onClick={handleClick} />
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
            <Grid gap={1} cols={1}>
                <Button as="button" type="submit" bg="primary" color="light" size="md">Update Account</Button>
            </Grid>
        </Form>
    );
}