import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hammer from 'rc-hammerjs';

import Dashboard from '../../pages/dashboard';

import Header from '../Header';
import BreadcrumbHistory from '../BreadcrumbHistory';
import s from './Layout.module.scss';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <div className={s.wrap}>
          <Header />
          <Hammer>
            <main className={s.content}>
              <BreadcrumbHistory url={this.props.location.pathname} />
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    {/* 
                    Actual Pages 
                    */}
                        <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                        <Route path="/app/main/dashboard" exact component={Dashboard}/>
                    {/* 
                    End Actual Pages 
                    */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
                Auto Complete <span style={{color:'#c9a6ed'}}>Made with <i className="la la-heart" style={{color:'red'}}></i></span>
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
  
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
