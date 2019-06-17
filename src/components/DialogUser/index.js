import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import UserForm from '../UserForm';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    appBar: {
      position: 'relative',
    },
  };

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

const DialogUser = ({ open, classes, handleClose }) => {

    return (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={handleClose()} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Sound
              </Typography>
              <Button color="inherit" onClick={handleClose()}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <UserForm />
        </Dialog>
    )
};

export default withStyles(styles)(DialogUser);
