import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { updateProfile } from '../../redux/actions';
import Avatar from '@material-ui/core/Avatar';
import SnackbarNotification from '../SnackbarNotification';
import RenderTextField from './components/RenderTextField';
import RenderSelectField from './components/RenderSelectField';
import RadioButton from './components/RadioButton';
import moment from 'moment';

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
        padding: '30px 12px',
        width: '50%',
        boxSizing: 'border-box',
        '& > div': {
            width: '100%',
        },
    },
    inputUser: {
        width: '100%',
        maxWidth: 450,
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
  }));

let UserForm = ({ handleSubmit, initialize, ...props }) => {
    const classes = useStyles();
    const cities = useSelector(state => state.cities);
    const profile = useSelector(state => state.profile.items);
    const dispatch = useDispatch();
    function initializeForm() {
        const initialFormState = {
            id: profile.id,
            user: {
                first_name: profile.user.first_name,
                last_name: profile.user.last_name,
                second_last_name: profile.user.second_last_name,
                date_joined: moment(profile.user.date_joined).format('YYYY-MM-DDThh:mm'),
            },
            age: profile.age,
            city: profile.city,
            birthday: moment(profile.birthday).format('YYYY-MM-DD'),
            gender: profile.gender,
        };
        initialize(initialFormState);
    }

    function handleSubmitVal(values) {
        dispatch(updateProfile(values));
    }

    useEffect(() => {
        initializeForm();
    }, []);

        return (
            <>
                <div>
                    <Avatar className={classes.avatar}>{profile.user.first_name}</Avatar>
                </div>
                <form onSubmit={handleSubmit(handleSubmitVal)} className={classes.root}>
                    <div  className={classes.itemInput}>
                        <Field
                            disabled
                            name="user.first_name"
                            component={RenderTextField}
                            label="First Name"
                            className={classes.inputUser}  
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <Field
                            disabled 
                            name="user.last_name"
                            component={RenderTextField}
                            label="Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <Field
                            disabled 
                            name="user.second_last_name"
                            component={RenderTextField}
                            label="Second Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <Field
                            disabled
                            name="user.date_joined"
                            component={RenderTextField}
                            label="Data Joined"
                            type="datetime-local"
                            className={classes.inputUser}
                        />
                    </div>
                    <div className={classes.itemInput} >
                        <Field 
                            name="city" 
                            label="City" 
                            component={RenderSelectField} 
                            className={classes.inputUser} >
                            <option value="/">Select a city...</option>
                            {cities.map(item => (
                            <option value={item.name} key={item.id}>
                                {item.name}
                            </option>
                            ))}
                        </Field>
                    </div>
                    <div  className={classes.itemInput}>
                        <Field 
                            name="birthday"
                            component={RenderTextField}
                            type="date"
                            label="Birthday"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div className={`${classes.itemInput}`} >
                        <Field name="gender" valueMale='male' valueFemale='female' component={RadioButton} />
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
})(UserForm);

export default UserForm;