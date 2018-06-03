import React from 'react';
import LoginController from './LoginController';
import MainController from './MainController';
import FirebaseService from '../service/FirebaseService';
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentUser:null,loading:false};

  }
  componentDidMount(){
    this.setState({loading:true})
    FirebaseService.observeAuth((currentUser) => {
        this.setState({currentUser : currentUser,loading:false});
        if(currentUser ==  null){
            console.log("Not Logged In");
        }
    });

  }
  render() {
    if(this.state.loading){
      return (
        <div className="rootController">
            Loading ...
        </div>
      );
    }
    else {
        return (
          <div className="rootController">
            {this.state.currentUser == null && <LoginController/>}
            {this.state.currentUser != null && <MainController/>}
          </div>
        );
    }
  }
}
