import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { queryUpdateProfiles } from '../../redux/actions';
import Avatar from '@material-ui/core/Avatar';
import Loader from '../Loader';
import SnackbarNotification from '../SnackbarNotification';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '40px 24px',
        },
    table: {
      minWidth: 650,
    },
    appBar: {
      position: 'relative',
    },
    avatar: {
        margin: '40px 0 0 36px',
        width: 100,
        fontSize: 16,
        height: 100,
    },
    itemInput: {
        padding: 12,
        width: '50%',
        boxSizing: 'border-box',
    },
    inputUser: {
        width: '100%',
        maxWidth: 450,
        boxShadow: '0 0 20px 1px #ecedee',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        padding: '10px 0 10px 24px',
        color: '#7e7e7e',
        fontSize: 16,
        fontWeight: 400,
        border: 'none',
        '&:disabled': {
            boxShadow: 'none',
        }
    },
    button: {
        margin: 12,
      },
    itemFlex: {
        display: 'flex',
        alignItems: 'center',
        '& div > label': {
            paddingRight: 24,
        },
    },
    labelFont: {
        display: 'block',
        marginRight: 24,
        color: '#7e7e7e',
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 8,
    },
  }));

let UserForm = ({ handleSubmit, initialValues }) => {
    const classes = useStyles();
    const cities = useSelector(state => state.cities);
      if(!initialValues) {
        return <Loader />
      }
        return (
            <>
                <div>
                    <Avatar className={classes.avatar}>{initialValues.user.first_name}</Avatar>
                </div>
                <form onSubmit={handleSubmit} className={classes.root}>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>First Name</label>
                        <Field
                            disabled
                            name={initialValues.user.first_name}
                            component="input"
                            label="First Name"
                            className={classes.inputUser}  
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Last Name</label>
                        <Field
                            disabled 
                            name="user.last_name"
                            component="input"
                            label="Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Second Last Name</label>
                        <Field
                            disabled 
                            name="user.second_last_name"
                            component="input"
                            label="Second Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Data Joined</label>
                        <Field
                            disabled 
                            name="user.date_joined"
                            component="input"
                            label="Data Joined"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Age</label>
                        <Field
                            disabled 
                            name="age"
                            component="input"
                            label="Age"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div className={classes.itemInput} >
                        <label className={classes.labelFont}>City</label>
                        <Field name="city" component="select" className={classes.inputUser}  >
                            <option value="">Select a city...</option>
                            {cities.map(item => (
                            <option value={item.name} key={item.id}>
                                {item.name}
                            </option>
                            ))}
                        </Field>
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Birthday</label>
                        <Field 
                            name="birthday"
                            component="input"
                            type="date"
                            label="Birthday"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div className={`${classes.itemInput} ${classes.itemFlex}`} >
                        <label className={classes.labelFont}>Gender</label>
                        <div>
                            <label>
                                <Field name="gender" component="input" type="radio" value="male" />{' '}
                                Male
                            </label>
                            <label>
                                <Field name="gender" component="input" type="radio" value="female" />{' '}
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit" className={classes.button}>
                            Update
                        </Button>
                    </div>
                </form>
                <SnackbarNotification />
            </>
        );
};  

UserForm = reduxForm({
    form: 'userForm',
    onSubmit: queryUpdateProfiles,
})(UserForm);
UserForm = connect(
  ({ profile }) => ({
    initialValues: profile.items,
  })
)(UserForm);

export default UserForm;