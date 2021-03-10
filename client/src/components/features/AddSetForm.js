import React, { useState } from 'react';
import { useParams } from 'react-router';

import { createSet } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { Form, FormHeader, FormGroup, FormInput } from '../shared/Form';

export default function AddSetForm() {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [errors, setErrors] = useState(null);
    let { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        const set = {
            name: name,
            weight: weight,
            reps: reps
        }

        createSet({ id, set }) 
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            <FormHeader>
                <h4>Add an Exercise to this Routine</h4>
            </FormHeader>
            <FormGroup>
                <FormInput
                    type="text"
                    id="name"
                    placeholder="Exercise Name"
                    aria-label="Exercise Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </FormGroup>
            <FormGroup>
                <FormInput
                    type="number"
                    id="weight"
                    placeholder="Weight in lbs."
                    aria-label="Weight in lbs."
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <FormInput
                    type="number"
                    id="reps"
                    placeholder="Reps"
                    aria-label="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required 
                />
            </FormGroup>
            <Button as="button" type="submit" bg="primary" color="light" size="md">Add Set</Button>
        </Form>
    );
}