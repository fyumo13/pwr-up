import React, { useCallback, useState } from 'react';

import ConfirmationDialog from '../components/shared/ConfirmationDialog';

export const useConfirmationDialog = ({ header, body, buttonText, onConfirm }) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);

    const Dialog = useCallback(() => {
        <ConfirmationDialog 
            header={header}
            body={body}
            buttonText={buttonText}
            open={open} 
            onConfirm={onConfirm} 
            onCancel={() => setOpen(false)} 
        />
    }, [open]);

    return { Dialog, onOpen }
}