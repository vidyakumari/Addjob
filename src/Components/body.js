import React from 'react';
import '../App.css'
import image from '../img.png'
import isLoggedIn from './../loginCheck'
import { history } from '../Components/Redux/history/history'
import { AddjobActions } from './Redux/Services/Addjob/action';
import { ApplyjobActions } from './Redux/Services/ApplyJob/action'

class Body extends React.Component {
  user = JSON.parse(localStorage.getItem('user'))

  constructor(props) {
    super(props);
    this.state = {
      applylist: JSON.parse(localStorage.getItem('appliedJobs')),
      jobData: JSON.parse(localStorage.getItem('jobs'))
    }
  }
  editjob = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const { dispatch } = this.props
    dispatch(AddjobActions.editJobs(id))
  }


  applyjobs = (event) => {
    if (isLoggedIn()) {
      const email = this.user.email;
      const id = event.currentTarget.name;
      const { dispatch } = this.props
      dispatch(ApplyjobActions.ApplyJobs(email, id))
    } else {
      history.push('/login')
    }
  }

  render() {
    const job = this.props.jobsdata
    console.log(job)
    try {
      if (job === null) {
        return (<div>No jobs</div>)
      } else {
        return (
          <div className="row">
            <div className="col-sm-12">
              <ul style={{ listStyleType: 'none' }}>
                {
                  !job &&  <h1>Currently no jobs available...</h1>
                }
                {
                  job.map((item, index) => {
                    return (
                      <li key={index} className="card">
                        <div className="col-sm-4 col-md-4 col-lg-2 col-4">
                          <img src={image} heigth="100px" width="80px" alt="company"></img>
                        </div>
                        <div className="col-sm-4 cborder col-md-4 col-lg-6 col-4" >
                          <div>{item.Company}</div>
                          <div>{item.Profile}</div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-4">
                          {isLoggedIn() && this.user.roles === 1 && <i id={item._id} className="fa fa-edit editjobbtn" onClick={this.editjob}></i>}
                          <div>Designation:  {item.Designation}</div>
                          <div>Salary:  {item.Salary}</div>
                          <div>City: {item.City}</div>
                          {/* <div>Location:<br></br>Type: {item.location.type}</div>
                          <div>{item.location.coordinates[0]}</div>
                          <div>{item.location.coordinates[1]}</div> */}
                          <div className="btn">
                            {isLoggedIn() && this.user.roles === 2 && <button name={item._id} id={'button' + index} onClick={this.applyjobs}>Apply</button>}
                            {!isLoggedIn() && <button onClick={this.applyjobs}>Apply</button>}
                          </div>
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
    } catch (error) {

    }
    return (<div>No jobs</div>)
  }
}
export default Body;