import {connect} from 'react-redux';
import Login from '../../login';
import Signup from '../../signup';

 function mapStateToProps(state) {
    const { alert } = state;
    const {error} = state.users;
    const { registering } = state.registration;
    return {
        alert,
        registering,
        error
    };
  }

const connectedLogin = connect(mapStateToProps)(Login);
const connectedSignup = connect(mapStateToProps)(Signup);
export { connectedSignup as Register,
  connectedLogin as Signin };