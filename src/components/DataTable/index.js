import React, { useEffect } from 'react';
import { requestProfiles } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DataItem from '../DataItem/';
import Loader from '../Loader';
import DialogLogOut from '../DialogLogOut';
import SnackarNotification from '../SnackbarNotification';

const useStyles = makeStyles(theme => ({
  wrapperTable: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  dialogButton: {
    alignSelf: 'flex-start',
  },
}));

const DataTable = () => {
    const classes = useStyles();
    const profiles = useSelector(store => store.profiles.items);
    const isLoader = useSelector(store => store.profiles.isLoader);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(requestProfiles(JSON.parse(localStorage.getItem('auth'))));
    }, []);
    return (
      <div className={classes.wrapperTable}>
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
              {
                isLoader ? 
                <TableRow>
                  <TableCell colSpan={9}>
                    <Loader />
                  </TableCell>
                </TableRow> :  
                <> 
                  {profiles.map(person => (
                        <DataItem key={person.id} data={person} />
                  ))}
                </>
              }
            </TableBody>
          </Table>
        </Paper>
        <DialogLogOut />
        <SnackarNotification />
      </div>
    )
}

export default DataTable;
