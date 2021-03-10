import React, { useState, useEffect } from 'react';

import { createRoutine, fetchUser } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { Form, FormHeader, FormGroup, FormInput } from '../shared/Form';

export default function AddRoutineForm() {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetchUser()
            .then(res => {
                setUser(res.data.user);
            })
            .catch(err => {
                setErrors(err.message);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const routine = {
            name: name,
            user: user
        }

        createRoutine(routine)
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            <FormHeader>
                <h3>Create new routine</h3>
            </FormHeader>
            <FormGroup>
                <FormInput
                    type="text"
                    id="name"
                    placeholder="Routine Name"
                    aria-label="Routine Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </FormGroup>
            <Button as="button" type="submit" bg="primary" color="light" size="md">Create Routine</Button>
        </Form>
    );
}