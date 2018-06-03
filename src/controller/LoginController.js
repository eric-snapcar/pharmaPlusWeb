import React from 'react';
import * as firebase from 'firebase';
import {Button,ControlGroup,InputGroup, Intent} from "@blueprintjs/core";
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    this.state = {email:null}
  }
  onTapLoginButton(){
      this.login("eric_hong_2000@yahoo.fr","karpov");
  }
  login(email,password){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
    /*
          {
       "kind": "identitytoolkit#SignupNewUserResponse",
       "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjE1ZjUyYTRhNGE5Y2MzNmZjOGEyNWZmMmQ0NzY4NmE0OGM2YjcxZWQifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGhhcm1hcGx1cy03ODJjOCIsImF1ZCI6InBoYXJtYXBsdXMtNzgyYzgiLCJhdXRoX3RpbWUiOjE1MjgwMzI4OTIsInVzZXJfaWQiOiJIMzlINzFiUUZtYVd4Wjc1N05HVWc2a1hQUnEyIiwic3ViIjoiSDM5SDcxYlFGbWFXeFo3NTdOR1VnNmtYUFJxMiIsImlhdCI6MTUyODAzMjg5MiwiZXhwIjoxNTI4MDM2NDkyLCJlbWFpbCI6ImVyaWNfaG9uZ18yMDAwQHlhaG9vLmZyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImVyaWNfaG9uZ18yMDAwQHlhaG9vLmZyIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.mYxCY9-eEJLeLoizXUc2cVbwo1zApVCEl6gJUTU1mpvbQGkTaQdyxrhYD3vx51TqbTlKv3KRL5kZw9cIgi-7lHeT8JE11AywHuMpnffLWbENdpbjbmCC1IcAVa-M2G3X1CeGXYKMxk8k9u-NJOkwhy9cynAeFJgdudlVAFa7r0VrwLtgRNpNYubVVYoqr9OlfoqQHLObdbrtHO5xNaWcxetMc30bFh5Wvpv91VNJQBn9oiXbv2ywqgDiHXuAqly6YqWId2NIGjF26AQAGZ3AtRKPnEfpS2VeyCztaFJ9tDO-_TMgZgssoiSlOlW4JUMGKR-EgZny68zjVXI4Gc0jPw",
       "email": "eric_hong_2000@yahoo.fr",
       "refreshToken": "AK2wQ-w0kuvhG25ZLjPczzlXlczFK-tyfXfHqlrjnK1YPtgHwFQQFdY_A2QL_A4FTEMqd1_ECMFwbpTZwKy2zMorVSeXTu59n3lsRSNmwnZxuxbM28xvnyZXKTr4iwvFaiLMt-M-4W8kxLJfh_oQ1f-G23LqXXF1L7MIh8qNB8z_gDrFd88xydAqE55IEzvDUikh0PIdUf09jMNy76Ft1H1MkWfvwl__hNqODzBN_-oH16wQIkSsiFY",
       "expiresIn": "3600",
       "localId": "H39H71bQFmaWxZ757NGUg6kXPRq2"
      }
          {
     "error": {
      "errors": [
       {
        "domain": "global",
        "reason": "invalid",
        "message": "EMAIL_EXISTS"
       }
      ],
      "code": 400,
      "message": "EMAIL_EXISTS"
     }
    }
    */
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
