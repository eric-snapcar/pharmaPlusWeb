import React from 'react';
import FirebaseService from '../service/FirebaseService';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    this.state = {email:null}
  }
  onTapLoginButton(){
      this.login("eric@snapcar.com","karpov");
  }
  login(email,password){
    FirebaseService.createUser(email, password,(error) => {
        if(error){
          console.log(error);
        }
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
