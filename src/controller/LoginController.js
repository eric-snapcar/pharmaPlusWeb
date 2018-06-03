import React from 'react';
import * as firebase from 'firebase';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    this.state = {email:null}
  }
  onTapLoginButton(){
      this.login("eric_hong_2000@yahoo.fr","rouge");
  }
  login(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
  }
  render() {
    return (
      <div className="loginController">
          <div className="loginViewWrapper">
              <img className="loginControllerSnapcarIcon" src="/static/logo.svg"  alt="" />
              <ControlGroup  style={{backgroundColor:"white","borderRadius":"3px"}}vertical={true}>
                  <InputGroup  className="pt-large" icon="person" placeholder="Email" value={this.state.email}  placeholder="Email" ref={(input) => { this.emailTextView = input; }} onChange={this.onChangeEmail}/>
                  <InputGroup className="pt-large" icon="lock" placeholder="Password" type="password" value={this.state.password}  placeholder="Password" ref={(input) => { this.passwordTextView = input; }} onChange={this.onChangePassword} onKeyPress={this.keyPressPassword}/>
                  <Button className="pt-large" loading={this.state.loading} onClick={() => this.onTapLoginButton()}>Log In</Button>
              </ControlGroup>
          </div>
      </div>
    );
  }
}
