import React from 'react';

import AddRoutineForm from '../components/features/AddRoutineForm';
import Calendar from '../components/features/Calendar';
import RoutinesList from '../components/features/RoutinesList';

import { Panel } from '../components/layout/Panel';
import { Wrapper } from '../components/layout/Wrapper';

export default function Dashboard() {
    return (
        <Wrapper>
            <Panel>
                <AddRoutineForm />
            </Panel>
            <Panel>
                <RoutinesList />
            </Panel>
        </Wrapper>
    );
}