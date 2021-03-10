import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../components/layout/Container';
import { Grid } from '../components/layout/Grid';
import Button from '../components/shared/Button';
import { Hero } from '../components/shared/Hero';
import { Logo } from '../components/shared/Logo';
import { ReactComponent as PwrUpLogo } from '../assets/img/pwr-up-logo.svg';

export default function LandingPage() {
    return (
        <Hero bg="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80">
            <Grid gap={1} cols={2}>
                <Container>
                    <Logo width="320px" height="134px">
                        <PwrUpLogo />
                    </Logo>
                </Container>
                <Container>
                    <h1>Your fitness journey starts here!</h1>
                    <Grid gap={1} cols={2}>
                        <Button variant="outline" bg="primary" color="light" size="lg" as={Link} to="/register">Register</Button>
                        <Button bg="primary" color="light" size="lg" as={Link} to="/login">Log In</Button>
                    </Grid>
                </Container>
            </Grid>
        </Hero>
    );
}