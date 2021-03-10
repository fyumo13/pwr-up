import React, { useState, useEffect } from 'react';

import { fetchRoutines } from '../../api/index';
import RoutineCard from './RoutineCard';
import Alert from '../shared/Alert';

export default function RoutinesList() {
    const [routines, setRoutines] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetchRoutines()
            .then(res => {
                setRoutines(res.data.routines.map(routine => {
                    return <RoutineCard routine={routine} key={routine._id} />
                }));
            })
            .catch(err => {
                setErrors(err.message);
            });
    });

    return (
        <>
            { errors ? <Alert status="error" color="dark">{errors}</Alert> : null }
            {routines}
        </>
    );
}