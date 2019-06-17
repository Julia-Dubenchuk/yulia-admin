import React, { Component } from 'react';
import { queryGetProfiles, getUserId } from '../../redux/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import UserForm from '../UserForm';
import DataItem from '../DataItem';
import Loader from '../Loader';

const styles = {
  root: {
        width: '100%',
        overflowX: 'auto',
      },
  table: {
    minWidth: 650,
  },
  appBar: {
    position: 'relative',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class DataTable extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { queryGetProfiles } = this.props;
    queryGetProfiles();
  }

  handleClickOpen = (id) => {
    const { getUserId } = this.props;
    this.setState({ open: true });
    getUserId(id);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { profiles, classes } = this.props;
    const { open } = this.state;
    return (
      <Paper>
        <Table className={classes.root}>
          <TableHead>
            <TableRow>
              <TableCell>first_name</TableCell>
              <TableCell align="right">last_name</TableCell>
              <TableCell align="right">second_last_name</TableCell>
              <TableCell align="right">date_joined</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">city</TableCell>
              <TableCell align="right">birthday</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.map(person => (
              <DataItem key={person.id} data={person} handleClickOpen={() => this.handleClickOpen}/>
            ))}
            </TableBody>
        </Table>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <UserForm />
        </Dialog>
      </Paper>
    )
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profiles.items,
  isLoader: state.isLoader,
  userId: state.userId,
});

const mapDispatchToProps = {
  queryGetProfiles,
  getUserId,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DataTable));
