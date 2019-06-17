import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RenderTextField from './components/RenderTextField';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { queryUpdateProfiles } from '../../redux/actions';

const styles = {
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
    itemInput: {
        padding: 12,
        width: '50%',
        boxSizing: 'border-box',
    },
    inputUser: {
        width: '100%',
        maxWidth: 450,
        height: 40,
        boxShadow: '0 0 20px 1px #ecedee',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        paddingLeft: 24,
        color: '#7e7e7e',
        fontSize: 16,
        fontWeight: 400,
    },
    button: {
        margin: 12,
      },
  };
class UserForm extends Component {

    render() {
        const { handleSubmit, classes } = this.props;
        console.log('handSub', handleSubmit);
        return (
            <form onSubmit={handleSubmit} className={classes.root}>
                <div  className={classes.itemInput}>
                    <Field 
                        name="user.first_name"
                        component="input"
                        label="First Name"
                        className={classes.inputUser}  
                    />
                </div>
                <div  className={classes.itemInput}>
                    <Field 
                        name="user.last_name"
                        component="input"
                        label="Last Name"
                        className={classes.inputUser}    
                    />
                </div>
                <div  className={classes.itemInput}>
                    <Field 
                        name="user.second_last_name"
                        component="input"
                        label="Second Last Name"
                        className={classes.inputUser}    
                    />
                </div>
                <div  className={classes.itemInput}>
                    <Field 
                        name="user.date_joined"
                        component="input"
                        label="Data Joined"
                        className={classes.inputUser}    
                    />
                </div>
                <div  className={classes.itemInput}>
                    <Field 
                        name="age"
                        component="input"
                        label="Age"
                        className={classes.inputUser}    
                    />
                </div>
                <div className={classes.itemInput} >
                    <Field 
                        name="city"
                        component="input"
                        label="City"
                        className={classes.inputUser}   
                    />
                </div>
                <div  className={classes.itemInput}>
                    <Field 
                        name="birthday"
                        component="input"
                        label="Birthday"
                        className={classes.inputUser}    
                    />
                </div>
                <div className={classes.itemInput} >
                    <Field 
                        name="gender"
                        component="input"
                        label="Gender"
                        className={classes.inputUser}   
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>
                        Submit
                    </Button>
                    <Button variant="contained" type="button" className={classes.button}>
                        Undo Changes
                    </Button>
                </div>
            </form>
        );
    }
};  

UserForm = reduxForm({
    form: 'userForm',
    onSubmit: queryUpdateProfiles,
})(UserForm);

const mapStateToProps = ({userId, profiles: { items }}) => ({
    initialValues: { ...items.filter(item => item.id === userId)[0] },
});

export default connect(mapStateToProps)(withStyles(styles)(UserForm));
