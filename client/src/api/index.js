import React from 'react';
import axios from 'axios';

const baseUrl = "https://shrouded-ocean-75153.herokuapp.com/api";

const unauthorizedHeaders = {
    headers: { 'Access-Control-Allow-Credentials': true }
};

const token = localStorage.getItem('token');

const authorizedHeaders = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
    }
}

// test incomplete
// error messages not being sent
export const register = async (user) => {
    try {
        await axios.post(`${baseUrl}/users/register`, user, unauthorizedHeaders)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                window.location.href = "/dashboard";
            });
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const login = async (user) => {
    try {
        await axios.post(`${baseUrl}/users/login`, user, unauthorizedHeaders)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                window.location.href = "/dashboard";
            });
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const logout = () => {
    localStorage.setItem('token', '');
    window.location.href = "/login";
}

export const fetchUser = async () => {
    try {
        return await axios.get(`${baseUrl}/users/current`, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const updateUser = async (update) => {
    try {
        return await axios.put(`${baseUrl}/users/update`, update, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const deleteUser = async () => {
    try {
        await axios.delete(`${baseUrl}/users/delete`, authorizedHeaders)
            .then(() => {
                localStorage.setItem('token', '');
                window.location.href = "/";
            });
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const createRoutine = async (routine) => {
    try {
        await axios.post(`${baseUrl}/routines/create`, routine, authorizedHeaders)
            .then(res => {
                window.location.href = `/routine/${res.data.routine._id}`;
            })
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const fetchRoutines = async () => {
    try {
        return await axios.get(`${baseUrl}/routines`, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const fetchRoutine = async (id) => {
    try {
        return await axios.get(`${baseUrl}/routines/${id}`, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const updateRoutine = async ({ id, update }) => {
    try {
        return await axios.put(`${baseUrl}/routines/update/${id}`, update, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const deleteRoutine = async (id) => {
    try {
        return await axios.delete(`${baseUrl}/routines/delete/${id}`, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const createSet = async ({ id, set }) => {
    try {
        return await axios.post(`${baseUrl}/sets/create/${id}`, set, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const updateSet = async ({ id, update }) => {
    try {
        return await axios.put(`${baseUrl}/sets/update/${id}`, update, authorizedHeaders)
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}

export const deleteSet = async (id) => {
    try {
        return await axios.delete(`${baseUrl}/sets/delete/${id}`, authorizedHeaders);
    } catch (err) {
        throw new Error(err.response.data.error);
    }
}