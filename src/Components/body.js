import React from 'react';
import '../App.css'
import image from '../img.png'
import isLoggedIn from './../loginCheck'
import { AddjobActions } from './Redux/Services/Addjob/action';
class Body extends React.Component {
  user = JSON.parse(localStorage.getItem('user'))

  editjob = (event) =>{
    event.preventDefault();
    const id = event.target.id;
    const {dispatch} = this.props
    dispatch(AddjobActions.editJobs(id))
  }
  render() {
    const job = this.props.jobsdata
    console.log(job)
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul style={{ listStyleType: 'none' }}>
            {
              job.map((item, index) => {
                return (
                  <li key={index} className="card">
                    <div className="col-sm-2">
                      <img src={image} heigth="100px" width="80px" alt="company"></img>
                    </div>
                    <div  className="col-sm-5 cborder" >
                      <div>{item.Company}</div>
                      <div>{item.Profile}</div>
                    </div>
                    <div  className="col-sm-5">
                    {isLoggedIn() && this.user.roles === 1 && <i id={item._id} className="fa fa-edit" onClick={this.editjob}></i>}
                      <div>Designation:  {item.Designation}</div>
                      <div>Salary:  {item.Salary}</div>
                      <div>City: {item.City}</div>
                      {/* <div>Location:<br></br>Type: {item.location.type}</div>
                      <div>{item.location.coordinates[0]}</div>
                      <div>{item.location.coordinates[1]}</div> */}
                      <div className="btn">
                      {isLoggedIn() && this.user.roles === 2 && <button>Apply</button>}
                      {!isLoggedIn() && <button>Apply</button>}
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
}
export default Body;