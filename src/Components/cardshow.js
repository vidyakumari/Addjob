import React from 'react';
import { Body } from './Redux/Container/bodyContainer'
import Filter from './filter';
import { bodyActions } from './Redux/Services/Body/actions'
import isLoggedIn from '../loginCheck'
import Pagination from './pagination'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      alljobs: [],
      user: JSON.parse(localStorage.getItem('user')),
      filteCompJob: [],
      currentPage: null, totalPages: null
    }
    const { dispatch } = this.props
    dispatch(bodyActions.getJobs())
  }

  onPageChanged = data => {
    const { alljobs } = this.state;
    console.log(alljobs)
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentJob = alljobs.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentJob, totalPages });
  }


  componentWillReceiveProps(nextProps) {
    const { jobs } = nextProps;
    try {
      const filterJob = jobs.filter((item) => {
        if (this.state.user.fullname === item.Company) {
          return true;
        }
        return false;
      })

      const currentJob = jobs.filter((item, index) => {
        if (index <= 2) {
          return true;
        }
      })
      this.setState({
        currentJob: currentJob,
        data: jobs,
        tofilter: currentJob,
        filteCompJob: filterJob,
        roleBasedFilter: filterJob
      })
    } catch (error) {
      console.log(error)
    }
    this.setState({
      data: jobs,
      tofilter: jobs,
      alljobs: jobs
    })
  }


  filterdata = (filterjobs) => {
    try {
      if (this.state.user.roles === 1) {
        this.setState({
          filteCompJob: filterjobs
        })
      }
      else {
        this.setState({
          currentJob: filterjobs
        })
      }
    } catch (error) {
      console.log(error)
    }
    this.setState({
      currentJob: filterjobs
    })
  }

  render() {
    const { currentPage, totalPages } = this.state;
    const totalJobs = this.state.data.length;

    if (totalJobs === 0) return null;
    return (
      <div className="App">
        {!isLoggedIn() && <Filter FilteredData={this.filterdata} job_filter={this.state.tofilter}></Filter>}
        {isLoggedIn() && this.state.user.roles === 2 && <Filter FilteredData={this.filterdata} job_filter={this.state.tofilter}></Filter>}
        {isLoggedIn() && this.state.user.roles === 1 && <Filter FilteredData={this.filterdata} job_filter={this.state.roleBasedFilter}></Filter>}
        {!isLoggedIn() && <Body jobsdata={this.state.currentJob}></Body>}
        {
          isLoggedIn() && this.state.user.roles === 1 && <Body jobsdata={this.state.filteCompJob} />
        }
        {
          isLoggedIn() && this.state.user.roles === 2 && <Body jobsdata={this.state.currentJob} />
        }
        <div className="pagination container mb-5">
          <div className="row d-flex flex-row py-5">

            <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                {currentPage && (
                  <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                    Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
                  </span>
                )}

              </div>

              <div className="d-flex flex-row py-4 align-items-center" style={{ display: 'inline' }}>
                <Pagination totalRecords={totalJobs} pageLimit={3} pageNeighbours={1} onPageChanged={this.onPageChanged} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
