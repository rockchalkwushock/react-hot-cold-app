import React from 'react';
import {connect} from 'react-redux';

class Message extends React.Component {
  render() {
    return (
      <h3>{this.props.message}</h3>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    message: state.message
  }
}

let Container = connect(mapStateToProps)(Message);
export default Container;
