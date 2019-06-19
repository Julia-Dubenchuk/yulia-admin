import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dialogButton: {
      alignSelf: 'flex-start',
      marginTop: 40,
    },
  }));

const DialogLogOut = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    function handleClickOpen() {
        setOpen(true);
    }
    
    function handleClose() {
        setOpen(false);
    }

    function handleClickLogOut() {
        localStorage.clear();
        window.location.reload(true);
    }
    return (
        <>
            <Button className={classes.dialogButton} variant="contained" color="primary" onClick={handleClickOpen}>
                Log Out
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClickLogOut} color="primary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default DialogLogOut;