import React, {Component} from 'react';

export default class Home extends Component {

showLock(){
  this.props.lock.show();
}

  render(){
    return (
      <div className="login-box">
        <a onClick={this.showLock.bind(this)}>Sign In</a>
      </div>
    )
  }
}
