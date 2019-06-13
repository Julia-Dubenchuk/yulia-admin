import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Authorization from '../components/Authorization';
import DataTable from '../components/DataTable';

const Router = (props) => {
    console.log('props', props);
    return (
        <Switch>
            <Route exact path='/authorization' component={Authorization} />
            <Route exact path='/data-table' component={DataTable} />
        </Switch>
      );
};

const mapStatetoProps = (state) => ({
    data: state,
});

export default connect(mapStatetoProps)(Router);

// export const signIn = (formData) => {
//     return { 
//       type: AUTH_SIGN_IN, 
//       payload: {
//           request: {
//               url: 'auth/login/',
//               data: formData,
//               method: 'post',
//               headers: {
//                 'Accept': 'application/json',
//                 'Accept-Language': 'es'
//               }
//           },
//           options: {
//               onSuccess({ getState, dispatch, response }) {
//                 if (response.data.is_staff === true) {
//                  localForage.setItem('auth', response.data).then(() => {
//                   dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: response.data });
//                  });
//                     history.push('/dashboard_default')
//                 } else {
//                   dispatch({ 
//                     type: COMMON_ALERT_OPEN, alert: {
//                        open: true,
//                        type: 'error',
//                        message: 'You don\t have access to this section'
//                      } 
//                    });
//                 }
//               }, 
//               onError({ getState, dispatch, error }) {
                 
//                  let message = 'Network error';
                 
//                  if (typeof error.response !== 'undefined') {
//                    message = typeof error.response.data.error !== 'undefined' ? error.response.data.error :'Error';
//                  }
  
//                  dispatch({ 
//                    type: COMMON_ALERT_OPEN, alert: {
//                       open: true,
//                       type: 'error',
//                       message: message
//                     } 
//                   });
//               },
//           }
//       } 
//     }
//   }