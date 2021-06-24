import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from '../pages/error';
/* eslint-enable */

import '../styles/theme.scss';
import Dashboard from '../pages/dashboard/Dashboard';

const CloseButton = ({closeToast}) => <i onClick={closeToast} className="la la-close notifications-close"/>

class App extends React.PureComponent {
  
  render() {
    return (
        <div style={{height:"100vh"}}>
            <ToastContainer
                autoClose={5000}
                hideProgressBar
                closeButton={<CloseButton/>}
            />
            <HashRouter>
                <Switch>
                    <Route path="/app/main/dashboard" exact component={Dashboard}/>
                    <Route path="/error" exact component={ErrorPage}/>
                    <Route component={ErrorPage}/>
                    <Redirect from="*" to="/app/main/dashboard"/>
                </Switch>
            </HashRouter>
        </div>

    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);