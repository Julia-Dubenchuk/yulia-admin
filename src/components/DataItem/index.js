import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import { isOpen, getUserId } from '../../redux/actions';

const DataItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleClickOpen = (id) => {
    dispatch(isOpen());
    dispatch(getUserId(id));
  };
    return (
      <TableRow>
        <TableCell scope="row">
          {data.user.first_name}
        </TableCell>
        <TableCell align="right">{data.user.last_name}</TableCell>
        <TableCell align="right">{data.user.second_last_name}</TableCell>
        <TableCell align="right">{data.user.date_joined}</TableCell>
        <TableCell align="right">{data.age}</TableCell>
        <TableCell align="right">{data.city}</TableCell>
        <TableCell align="right">{data.birthday}</TableCell>
        <TableCell align="right">{data.gender}</TableCell>
        <TableCell align="right">
          <Button variant="outlined" color="primary" onClick={() => handleClickOpen(data.id)}>
            <Edit />
          </Button>
        </TableCell>
      </TableRow>
    )
}


export default DataItem;