import React from 'react';
import '../App.css'
import image from '../profile.png'

class usersProfile extends React.Component {
  user = JSON.parse(localStorage.getItem('user'))

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
        <dt>User Profile</dt>
                    <ul style={{ listStyleType: 'none' }}>
            <li className="list-group">
              <div className="col-sm-2 profile" >
                <img src={image} heigth="100px" width="80px" alt="company"></img>
              </div>
              <div className="col-lg-3 profile" >
                <dl>
                  <dt>Fullname:</dt>
                  <dd>{this.user.fullname}</dd>
                </dl>
                <dl>
                  <dt>Email:</dt>
                  <dd> {this.user.email}</dd>
                </dl>
                <dl>
                  <dt>Phone:</dt>
                  <dd> {this.user.phone}</dd>
                </dl>
              </div>
            </li>
          </ul>

        </div>
      </div>

    )
  }
}
export default usersProfile;