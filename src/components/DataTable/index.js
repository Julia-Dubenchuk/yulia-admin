import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { dataUsers, getDataUsers, fetchPosts } from '../../redux/actions';
import { connect } from 'react-redux';

// class DataTable extends Component() {

// //   // state = {
// //   //   users: [],
// //   // };

// //   componentDidMount() {
// //     // console.log(
// //     // 'prop', this.props.getDataUsers
// //     // );
// //     // this.setState({
// //     //   users: this.props.getDataUsers,
// //     // });
// //   }

// //   // useStyles = makeStyles(theme => ({
// //   //   root: {
// //   //     width: '100%',
// //   //     marginTop: theme.spacing(3),
// //   //     overflowX: 'auto',
// //   //   },
// //   //   table: {
// //   //     minWidth: 650,
// //   //   },
// //   // }));

// //   // createData = (name, calories, fat, carbs, protein) => {
// //   //   return { name, calories, fat, carbs, protein };
// //   // }
  
// //   // rows = [
// //   //   this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   //   this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   //   this.createData('Eclair', 262, 16.0, 24, 6.0),
// //   //   this.createData('Cupcake', 305, 3.7, 67, 4.3),
// //   //   this.createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   // ];

//   render() {
// //     // const classes = this.useStyles();
// //     // console.log('users', this.state.users);
//     return (
//       <Paper>
//         123
//        {/* <Table className={classes.table}> */}
//         {/* <TableHead>
// //             <TableRow>
// //               <TableCell>Dessert (100g serving)</TableCell>
// //               <TableCell align="right">Calories</TableCell>
// //               <TableCell align="right">Fat&nbsp;(g)</TableCell>
// //               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
// //               <TableCell align="right">Protein&nbsp;(g)</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows.map(row => (
// //               <TableRow key={row.name}>
// //                 <TableCell component="th" scope="row">
// //                   {row.name}
// //                 </TableCell>
// //                 <TableCell align="right">{row.calories}</TableCell>
// //                 <TableCell align="right">{row.fat}</TableCell>
// //                 <TableCell align="right">{row.carbs}</TableCell>
// //                 <TableCell align="right">{row.protein}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody> */}
//            {/* </Table> */}
//      </Paper>
//     );
//   }
// }
// const DataTable = () => {
//   return (
//     <div>func</div>
//   )
// };
class DataTable extends Component {

  state = {
    users: [],
 };

  componentDidMount() {
    console.log('prop', this.props.getDataUsers);
    console.log('dataUsers', fetchPosts());
    const array = getDataUsers();
    console.log('array', array);
    this.setState({
      users: this.props.dataUsers(array),
    });
    // fetchPosts()();
  }

  render() {
    console.log('datarender', this.state.users);
    return (
      <div>class</div>
    )
  }
}
// export default DataTable;
export default connect(null, {dataUsers, getDataUsers, fetchPosts})(DataTable);