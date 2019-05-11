import React from 'react';
import '../App.css'
import image from '../img.png'
import {ApplyjobActions} from './Redux/Services/ApplyJob/action'
import isLoggedIn from '../loginCheck';


class JobsAppliedList extends React.Component {
  user = JSON.parse(localStorage.getItem('user'))
  constructor(props) {
    super(props);
    const { Appliedjobs } = this.props
    this.state = {
      appliedjobs: Appliedjobs,
      Status : ''

    }
    console.log(Appliedjobs)
  }

  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value })
  }

  ChangeStatus = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    const id = event.target.id;
    const { Status } = this.state;
    const { dispatch } = this.props;
    if (id && Status) {
      dispatch(ApplyjobActions.UpdateStatus(id,Status));
    }

  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul style={{ listStyleType: 'none' }}>
            {
              this.state.appliedjobs.map((item, index) => {
                return (
                  <li key={index} className="card">
                    <div className="col-sm-2">
                      <img src={image} heigth="100px" width="80px" alt="company"></img>
                    </div>
                    <div className="col-sm-5 cborder" >User Details
                      <div>Fullname: {item.userDetails.fullname}</div>
                      <div>Email: {item.userDetails.email}</div>
                      <div>Phone: {item.userDetails.phone}</div>
                      {isLoggedIn && this.user.roles ===2 && <div>Status: {item.Status}</div>}
                    </div>
                    <div className="col-sm-5 cborder" >Job Details
                      <div>Designation: {item.jobsDetails.Designation}</div>
                      <div>Profile: {item.jobsDetails.Profile}</div>
                      <div>Salary: {item.jobsDetails.Salary}</div>
                      <div>City: {item.jobsDetails.City}</div>
                     {isLoggedIn && this.user.roles ===1 && <div>Status: {item.Status}</div>}
                     {isLoggedIn && this.user.roles === 1 && <div >ChangeStatus: <input onChange={this.handleUserInput} type="text" name="Status" placeholder="Update Status here"></input>
                     <button onClick={this.ChangeStatus} id={item._id} type="submit" value="Update Status">Update Status</button>
                      </div>}
                    </div>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>

    )
  }
}
export default JobsAppliedList;