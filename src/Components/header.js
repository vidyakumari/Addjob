import React from 'react';
import { Link } from 'react-router-dom';
import isLoggedIn from '../loginCheck'
import { userActions } from './Redux/Services/User/actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  }

  logout = () => {
    userActions.logout()
  }
  render() {
    console.log(this.state.user)
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid" >
          <div className="navbar-header">
            <div className="navbar-brand">Naukri</div>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            {isLoggedIn() && this.state.user.roles === 1 && <li><Link to="/AppliedJobs" className="listbtn" >AppliedJobs</Link></li>}
          </ul>
          {
            !isLoggedIn() && <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login" className="fa fa-sign-out" aria-hidden="true">Login</Link></li>
              <li><Link to="/signup" className="fa fa-sign-in" aria-hidden="true">Signup</Link></li>
            </ul>
          }
          {
            isLoggedIn() && <ul className="nav navbar-nav navbar-right">
              {isLoggedIn() && this.state.user.roles === 1 && <li><Link to="/addJobs" className="fa fa-plus">AddJobs</Link></li>}
              <li><Link to="/profile" className="fa fa-user" aria-hidden="true">Hi! {this.state.user.fullname}</Link></li>
              <li><Link to="/" onClick={this.logout} className="fa fa-sign-in" aria-hidden="true">Logout</Link></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default Header;