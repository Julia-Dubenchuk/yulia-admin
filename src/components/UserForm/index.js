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
import { queryUpdateProfiles } from '../../redux/actions';

const styles = {
    root: {
        margin: '40px 24px',
        },
    table: {
      minWidth: 650,
    },
    appBar: {
      position: 'relative',
    },
  };
class UserForm extends Component {

    render() {
        const { handleSubmit, classes } = this.props;
        console.log('handSub', handleSubmit);
        return (
            <form onSubmit={handleSubmit} className={classes.root}>
                <div>
                    <Field 
                        name="user.first_name"
                        component="input"
                        label="First Name"  
                    />
                </div>
                <div>
                    <Field 
                        name="user.last_name"
                        component="input"
                        label="Last Name"    
                    />
                </div>
                <div>
                    <Field 
                        name="user.second_last_name"
                        component="input"
                        label="Second Last Name"    
                    />
                </div>
                <div>
                    <Field 
                        name="user.date_joined"
                        component="input"
                        label="Data Joined"    
                    />
                </div>
                <div>
                    <Field 
                        name="age"
                        component="input"
                        label="Age"    
                    />
                </div>
                <div>
                    <Field 
                        name="city"
                        component="input"
                        label="City"    
                    />
                </div>
                <div>
                    <Field 
                        name="birthday"
                        component="input"
                        label="Birthday"    
                    />
                </div>
                <div>
                    <Field 
                        name="gender"
                        component="input"
                        label="Gender"    
                    />
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                    <button type="button">
                        Undo Changes
                    </button>
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
