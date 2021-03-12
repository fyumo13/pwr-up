import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Dialog = styled.div``;

const DialogHeader = styled.div``;

const DialogBody = styled.div``;

export default function ConfirmationDialog(props) {
    return (
        <Dialog 
            header={props.header}
            body={props.body}
            buttonText={props.buttonText}
            open={props.open} 
            onConfirm={props.onConfirm} 
            onCancel={props.onCancel}
        >
            <DialogHeader>
                {props.header}
            </DialogHeader>
            <DialogBody>
                {props.body}
                <Button bg="primary" color="light" size="md">{props.buttonText}</Button>
            </DialogBody>
        </Dialog>
    );
}

ConfirmationDialog.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    buttonText: PropTypes.string,
    open: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    children: PropTypes.node
}