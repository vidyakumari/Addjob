import React from 'react'
import { Link } from 'react-router-dom'
class Dashboard extends React.Component {
  appliedUser = JSON.parse(localStorage.getItem('appliedJobs'));
  User = JSON.parse(localStorage.getItem('user'));

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    let count = 0;
    try {
      this.appliedUser.map((item, index) => {
        if (item.Status === 'Applied' && item.userDetails.fullname === this.User.fullname) {
          count++;
        }
        if (item.Status === 'Shortlisted' && item.userDetails.fullname === this.User.fullname) {
          count++;
        };
        if (item.Status === 'Selected' && item.userDetails.fullname === this.User.fullname) {
          count++;
        };
      }
      )
    } catch (error) {
      console.log(error);
    }
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          {
            this.appliedUser.map((item, index) => {
              if (item.Status === 'Applied' && item.userDetails.fullname === this.User.fullname) {
                return (<p>Hello {item.userDetails.fullname}, you have successfully applied for the job profile in {item.jobsDetails.Company} for {item.jobsDetails.Designation} post.We will further notify you for the next steps.</p>)
              };
              if (item.Status === 'Shortlisted' && item.userDetails.fullname === this.User.fullname) {
                return (<p>Hello {item.userDetails.fullname}, you are shortlisted for the job opportunity in {item.jobsDetails.Company} for {item.jobsDetails.Designation} post.You can come for the further round of interviews at {item.jobsDetails.Company} {item.jobsDetails.City} office on {item.createdAt}.</p>)
              };
              if (item.Status === 'Selected' && item.userDetails.fullname === this.User.fullname) {
                return (<p>Hello {item.userDetails.fullname}, you are selected in {item.jobsDetails.Company} for {item.jobsDetails.Designation} post.You can join {item.jobsDetails.Company} {item.jobsDetails.City} office on {item.createdAt}.</p>)
              };
            }
            )
          }
        </Modal>
        {/* <button type='button' onClick={this.showModal}></button> */}
        <span className="count">{count}</span><Link onClick={this.showModal} className="fa fa-bell">Notifications</Link>
      </main>
    )
  }
}
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button className="btn btn-link"
          onClick={handleClose}
        >
          Close
          </button>
      </section>
    </div>
  );
};

export default Dashboard;