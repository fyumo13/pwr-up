import React from 'react';

import { Hero } from '../components/shared/Hero';
import LoginForm from '../components/features/LoginForm';

export default function Login() {
    return (
        <Hero bg="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80">
            <LoginForm />
        </Hero>
    );
}