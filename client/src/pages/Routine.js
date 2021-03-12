import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';

import { fetchRoutine } from '../api/index';

import AddSetForm from '../components/features/AddSetForm';
import SetCard from '../components/features/SetCard';

import { Panel } from '../components/layout/Panel';
import { SpanText } from '../components/shared/SpanText';
import { Wrapper } from '../components/layout/Wrapper';

export default function Routine() {
    const [routine, setRoutine] = useState(null);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    let { id } = useParams();

    useEffect(() => {
        fetchRoutine(id)
            .then(res => {
                setName(res.data.routine.name);
                setDate(res.data.routine.createdAt);
                setRoutine(res.data.routine.sets.map(set => {
                    return <SetCard set={set} key={set._id} />
                }));
            })
            .catch(err => {
                window.alert(err);
            });
    });

    return (
        <Wrapper>
            <Panel>
                <AddSetForm />
            </Panel>
            <Panel>
                <h5>{name}</h5>
                <p><SpanText>{moment(date).format('MM/DD/YYYY')}</SpanText></p>
                {routine}
            </Panel>
        </Wrapper>
    );
}