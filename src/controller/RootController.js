import React from 'react';
import LoginController from './LoginController';
import MainController from './MainController';
import FirebaseService from '../service/FirebaseService';
export default class RootController extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentUser:null,loadingAuth:false};
  }
  componentDidMount(){
    this.setState({loadingAuth:true})
    FirebaseService.observeAuth((currentUser) => {
        if(currentUser ==  null){
          this.setState({currentUser : null,loadingAuth:false});
        }else {
          this.setState({currentUser : currentUser,loadingAuth:false});
        }
    });
  }
  render() {
    return (
      <div className="rootController">
        {this.state.currentUser == null && <LoginController loading = {this.state.loadingAuth}/>}
        {this.state.currentUser != null && <MainController currentUser = {this.state.currentUser} />}
      </div>
    );
  }
}
