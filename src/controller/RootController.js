import React from 'react';
import LoginController from './LoginController';
export default class RootController extends React.Component {
  render() {
    return (
      <div className="rootController">
        <LoginController/>
      </div>
    );
  }
}
