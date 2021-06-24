import React, { Fragment } from "react";

import s from "./Dashboard.module.scss";

import Widget from "../../components/Widget";
import Header from "../../components/Header";

import {call_auto_complete} from '../../actions/server_calls/auto_complete/read_suggestions';
import {call_save_name} from '../../actions/server_calls/auto_complete/write_name';
import {getWriteStatus} from '../../actions/app';

import { UncontrolledDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  FormGroup, 
  Label, 
  Input,
  Button, 
  CardBody, 
  Card,
  Alert
  } from 'reactstrap';


import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Dashboard extends React.Component {

  state = {
    firstName:""
  }

  getAutoSuggestions = (e) =>{

    this.setState({
      firstName: e.target.value
    });

    if(e.target.value.length > 0)
    {
      this.props._callAutoSuggestions(e.target.value);
    }

  }

  changeFirstName = (e) => {

    this.setState({
      firstName: e.currentTarget.textContent
    });

  }

  save = () => {

    this.props._callSaveName(this.state.firstName);

  }

  onDismiss = () =>{

    this.props._changeStatus(null);

  }


  render() {
    return (
      <Fragment>
      <Header/>
        <div className={s.wrapper}>
          <Widget title={
            <h5>
              User <span className="fw-semi-bold">Details</span>
            </h5>
          } className={s.centerDiv}>

                <Card className={s.outerCard}>
                    <CardBody>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <UncontrolledDropdown>
                                    <DropdownToggle className={s.dropdownToggleCustom}>
                                        <Input type="text" name="typeInFirstName" id="typeInFirstName" autoComplete="off" placeholder="First Name" onChange={(e)=>{this.getAutoSuggestions(e)}} value={this.state.firstName}/>
                                    </DropdownToggle>
                                    <DropdownMenu className={s.dropdownMenuContainer}>
                                        {
                                          this.props._autoCompleteData.map((row,index) => {

                                            return(
                                              <DropdownItem id={"suggestionbutton-"+index} className={"suggestionItem"} key={row} onClick={(e) => this.changeFirstName(e)}>{row}</DropdownItem>
                                            )

                                          })
                                        }
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </FormGroup>
                            <Button className={s.submitButton} onClick={(e)=>this.save()}>Save</Button>
                            <br/>
                            <Alert color="info" isOpen={this.props._saveStatus===true} toggle={()=>this.onDismiss()} className={s.alertDismissibleButton}>
                              Successfully saved!
                            </Alert>
                            <Alert color="warning" isOpen={this.props._saveStatus===false} toggle={()=>this.onDismiss()} className={s.alertDismissibleButton}>
                              Oops Error!
                            </Alert>
                    </CardBody>
                </Card>

          </Widget>
        </div>
      
      </Fragment>
     );
  }

}

function mapStateToProps(store) {
  return {
    _autoCompleteData: store.app.autoCompleteData,
    _saveStatus: store.app.writeStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    _callAutoSuggestions : (partial_name) => dispatch(call_auto_complete(partial_name)),
    _callSaveName : (full_name) => dispatch(call_save_name(full_name)),
    _changeStatus : (status) => dispatch(getWriteStatus(status))
  }  
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));