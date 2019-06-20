import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SnackbarNotification from '../SnackbarNotification';
import { authAdmin, getToken } from '../../redux/actions';

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

let Authorization = (props) => {
  console.log('HS', props.handleSubmit);
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log('qwe', dispatch(authAdmin));
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={ props.handleSubmit } >
          <Field
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            component={renderTextField}
            autoFocus
          />
          <Field
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            component={renderTextField}
            type="password"
            id="password"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <SnackbarNotification />
    </Container>
    )
};

Authorization = reduxForm({
    form: 'authorizationForm',
    onSubmit: getToken,
})(Authorization);

export default Authorization;
