import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { queryUpdateProfiles, requestProfilesId, updateProfile } from '../../redux/actions';
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

let UserForm = ({ handleSubmit, initialize, ...props }) => {
    const classes = useStyles();
    const cities = useSelector(state => state.cities);
    const profile = useSelector(state => state.profile.items);
    const dispatch = useDispatch();
    function initializeForm() {
        console.log('prof', profile);
        const initialFormState = {
            id: profile.id,
            first_name: profile.user.first_name,
            last_name: profile.user.last_name,
            second_last_name: profile.user.second_last_name,
            date_joined: profile.user.date_joined,
            age: profile.age,
            city: profile.city,
            birthday: profile.birthday,
            gender: profile.gender,
        };
        initialize(initialFormState);
        console.log('prl2', props);
    }

    handleSubmit = (values) => {
        console.log('val', values);
        // dispatch(updateProfile(values));
        const dis = new Promise((resolve, reject) => {
            // resolve(dispatch(updateProfile(values, profile.id)));
        });
        // dis.then(() => dispatch(updateProfile(values, profile.id)));
        // console.log('dis', dis);
        // dis.then(() => {
            // do nothing
            // dispatch(updateProfile(values, profile.id));
      
            // return sleep(2000).then(() => {
            //   this.props.dispatch(account_detail(this.props.user.id))
            // })
        //   })
      }

    useEffect(() => {
        // dispatch(requestProfilesId(userId));
        console.log('profilMD', profile);
        initializeForm();
    }, []);
    console.log('prl', UserForm.values);

    //   if(!profile) {
    //     return <Loader />
    //   }
        return (
            <>
                <div>
                    <Avatar className={classes.avatar}>{profile.user.first_name}</Avatar>
                </div>
                <form onSubmit={handleSubmit(handleSubmit)} className={classes.root}>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>First Name</label>
                        <Field
                            disabled
                            name="first_name"
                            component="input"
                            label="First Name"
                            className={classes.inputUser}  
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Last Name</label>
                        <Field
                            disabled 
                            name="last_name"
                            component="input"
                            label="Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Second Last Name</label>
                        <Field
                            disabled 
                            name="second_last_name"
                            component="input"
                            label="Second Last Name"
                            className={classes.inputUser}    
                        />
                    </div>
                    <div  className={classes.itemInput}>
                        <label className={classes.labelFont}>Data Joined</label>
                        <Field
                            disabled 
                            name="date_joined"
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
    // onSubmit: updateProfile,
})(UserForm);
// UserForm = connect(
//   ({ profile }) => ({
//     profile: profile.items,
//   })
// )(UserForm);

export default UserForm;