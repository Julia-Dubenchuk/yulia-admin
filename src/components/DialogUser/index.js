import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import UserForm from '../UserForm';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { isOpen, requestProfilesId, requestCities } from '../../redux/actions';
import history from '../../history';
import PageNotFound from '../PageNotFound';
import Loader from '../Loader';

  const useStyles = makeStyles(() => ({
    appBar: {
      position: 'relative',
    },
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const DialogUser = ({ userId }) => {
  const classes = useStyles();
  const open = useSelector(store => store.isOpen);
  const isError = useSelector(store => store.profile.isError);
  const isLoader = useSelector(store => store.profile.isLoader);
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(isOpen(false));
    history.push('/data-table');
  };

  useEffect(() => {
    dispatch(isOpen(true));
    dispatch(requestProfilesId(userId));
    dispatch(requestCities(JSON.parse(localStorage.getItem('auth'))));
  }, []);

  if(isError) {
    return <PageNotFound />
  } 

    return (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Profile
              </Typography>
            </Toolbar>
          </AppBar>
          {
            isLoader ? <Loader /> : <UserForm />
          }
        </Dialog>
    )
};

export default DialogUser;
