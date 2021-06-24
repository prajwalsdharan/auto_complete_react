import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
  Navbar,
  Nav,
  UncontrolledAlert
} from "reactstrap";

import avatar from "../../assets/avatar.png";

import s from "./Header.module.scss";
import "animate.css";

class Header extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    return (
      <Navbar className={`d-print-none `}>
        <div className={s.burger}>
          
        </div>
        <div className={`d-print-none ${s.root}`}>
          <UncontrolledAlert
            className={`${s.alert} mr-3 d-lg-down-none animate__animated animate__bounceIn animate__delay-1s`}
          >
            This is a demo for Auto Complete Feature&nbsp;
          </UncontrolledAlert>
          <Nav className="ml-md-0">
            <div className={`${s.avatarContainer}`}>
            <span
                  className={`${s.avatar} rounded-circle thumb-sm float-left`}
                >
                  <img src={avatar} alt="..." />
            </span>
            <span className={`small d-sm-down-none ${s.accountCheck}`}>Prajwal</span>
            </div>

          </Nav>
        </div>
      </Navbar>
    );
  }
}

function mapStateToProps(store) {
  return {
  };
}

export default withRouter(connect(mapStateToProps)(Header));
