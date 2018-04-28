import React, { Component, cloneElement } from 'react';
import { withRouter } from 'react-router-dom';
import { getUser } from '../helpers/Auth';

class Authenticated extends Component {
  componentDidMount() {
    if (!getUser()) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="authenticated" user={getUser()}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Authenticated);
