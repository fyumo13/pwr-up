import React, { useState } from 'react';

import { updateSet, deleteSet } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { ButtonGroup } from '../shared/ButtonGroup';
import { Card, CardTitle, CardBody } from '../shared/Card';
import { Form, FormGroup, FormInput } from '../shared/Form';

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pen-icon.svg';

export default function SetCard(props) {
    const id = (props.set._id).toString();
    const [errors, setErrors] = useState(null);
    const [name, setName] = useState(props.set.name);
    const [weight, setWeight] = useState(props.set.weight);
    const [reps, setReps] = useState(props.set.reps);
    const [edit, setEdit] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();

        const update = {
            name: name,
            weight: weight,
            reps: reps
        }

        updateSet({ id, update })
            .then(() => {
                setEdit(false);
            })
            .catch(err => {
                setErrors(err.message);
            });
    }

    const handleDelete = () => {
        deleteSet(id)
            .catch(err => {
                setErrors(err.message);
            });
    }

    return (
        <Card>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            { edit ? 
                <Form onSubmit={handleEdit}>
                    <CloseIcon onClick={() => setEdit(false)} />
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
                    <Button as="button" type="submit" bg="primary" color="light" size="md">Edit Set</Button>
                </Form>
            :
                <>
                    <CardTitle>
                        <h6>{props.set.name}</h6>
                        <ButtonGroup>
                            <EditIcon onClick={() => setEdit(true)} />
                            <DeleteIcon onClick={handleDelete} />
                        </ButtonGroup>
                    </CardTitle>
                    <CardBody>
                        <p>{props.set.weight ? `${props.set.weight} lbs. x ` : null } {props.set.reps} reps</p>
                    </CardBody>
                </>
            }
        </Card>
    );
}