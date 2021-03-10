import React, { useState } from 'react';

import { updateRoutine, deleteRoutine } from '../../api/index';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import { ButtonGroup } from '../shared/ButtonGroup';
import { Card, CardTitle } from '../shared/Card';
import { Form, FormGroup, FormInput } from '../shared/Form';
import { TextLink } from '../shared/TextLink';

import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pen-icon.svg';

export default function RoutineCard(props) {
    const id = (props.routine._id).toString();
    const [errors, setErrors] = useState(null);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(props.routine.name);

    const handleEdit = (e) => {
        e.preventDefault();

        const update = {
            name: name
        }

        updateRoutine({ id, update })
            .then(() => {
                setEdit(false);
            })
            .catch(err => {
                setErrors(err.message);
            });
    }
    
    const handleDelete = () => {
        deleteRoutine(id)
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
                            type="name"
                            id="name"
                            placeholder="Routine Name"
                            aria-label="Routine Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </FormGroup>
                    <Button as="button" type="submit" bg="primary" color="light" size="md">Edit Routine</Button>
                </Form>
            : 
                <CardTitle>
                    <TextLink to={`/routine/${props.routine._id}`}>
                        <h5>{props.routine.name}</h5>
                    </TextLink>
                    <ButtonGroup>
                        <EditIcon onClick={() => setEdit(true)} />
                        <DeleteIcon onClick={handleDelete} />
                    </ButtonGroup>
                </CardTitle>
            }
        </Card>
    );
}