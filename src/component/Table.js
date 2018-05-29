import React from 'react';
import {Spinner} from "@blueprintjs/core";
export default class TableLoading extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={{"display":"flex","alignItem":"center","justifyContent":"center","padding":"30px"}}><Spinner/></div>
    );
  }
}
