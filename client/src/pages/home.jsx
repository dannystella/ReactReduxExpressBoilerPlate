import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {fetchPing} from '../modules/users/actions/index_userActions';

class Main extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

  componentDidMount() {
    this.props.fetchPing();
  }

  render () {
  	return (
      <div>
        {this.props.users.message}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    users: state.users
  }
}
  
export default connect(mapStateToProps, {
  fetchPing
})(Main);

