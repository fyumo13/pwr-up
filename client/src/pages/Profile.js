import React from 'react';

import { Panel } from '../components/layout/Panel';
import { Wrapper } from '../components/layout/Wrapper';

import UpdateUserForm from '../components/features/UpdateUserForm';

export default function Profile() {
    return (
        <>
            <Wrapper>
                <Panel>
                    <UpdateUserForm /> 
                </Panel>  
            </Wrapper>    
        </>
    );
}