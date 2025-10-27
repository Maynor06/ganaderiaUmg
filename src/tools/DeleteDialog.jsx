import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteForever';

const DeleteDialog = ({ open, handleClose, onConfirm, itemToDelete = 'este registro'}) => {
    

    const handleConfirm = () => {
        handleClose(); 
        onConfirm();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'error.main' }}>
                <DeleteIcon />
                {"Confirmar Eliminación"}
            </DialogTitle>
            
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography component="span" fontWeight="bold">
                        Estás a punto de eliminar {itemToDelete}. 
                    </Typography>
                    <br/>
                    Esta acción es **irreversible**. ¿Estás absolutamente seguro de continuar?
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button 
                    onClick={handleClose} 
                    color="primary" 
                    variant="outlined"
                    autoFocus
                >
                    Cancelar
                </Button>
                
                <Button 
                    onClick={handleConfirm} 
                    color="error" 
                    variant="contained"
                    startIcon={<DeleteIcon />}
                >
                    Sí, Eliminar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteDialog;