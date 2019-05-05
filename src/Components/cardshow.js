import React from 'react';
import {Body} from './Redux/Container/bodyContainer'
import Filter from './filter';
import {bodyActions} from './Redux/Services/Body/actions'
import isLoggedIn from '../loginCheck'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      user: JSON.parse(localStorage.getItem('user')),
      filteCompJob: []
    }
    const {dispatch} = this.props
    dispatch(bodyActions.getJobs())
  }

  // componentDidMount() {
    
  // }

  componentWillReceiveProps(nextProps) {
    const {jobs} = nextProps;
    try {
      const filterJob = jobs.filter((item) => {
        if(this.state.user.fullname === item.Company) {
          return true;
        }
        return false;
      })
      this.setState({
        data: jobs,
        tofilter: jobs,
        filteCompJob: filterJob
      })
    } catch (error) {
      console.log(error)
    }
    this.setState({
      data: jobs,
      tofilter: jobs
    })
  }


  filterdata = (filterjobs) => {
    this.setState({
      data: filterjobs
    })
  }

  render() {
    return (
      <div className="App">
        <Filter FilteredData={this.filterdata} job_filter={this.state.tofilter}></Filter>
        {
          !isLoggedIn() && <Body jobsdata={this.state.data}></Body>
        }
        {
          isLoggedIn() && this.state.user.roles === 1 && <Body jobsdata={this.state.filteCompJob} />
        }
        {
          isLoggedIn() && this.state.user.roles === 2 && <Body jobsdata={this.state.data} />
        }
      </div>
    );
  }
}

export default Card;
