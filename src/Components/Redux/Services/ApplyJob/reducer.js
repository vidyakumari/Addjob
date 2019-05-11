import { ApplyJobsConstants } from './constants';


function Applyjobs(state = {}, action) {
  switch (action.type) {
    case ApplyJobsConstants.JOBS_REQUEST:
      return {
        jobs: action.jobs
      };
    case ApplyJobsConstants.JOBS_SUCCESS:
      return {
        jobs: action.jobs
      };
    case ApplyJobsConstants.JOBS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

function Appliedjobs(state = {}, action) {
  switch (action.type) {
    case ApplyJobsConstants.APPLIED_JOBS_REQUEST:
      return {
        Applyjobs: action.jobs
      };
    case ApplyJobsConstants.APPLIED_JOBS_SUCCESS:
      return {
        Appliedjobs: action.jobs
      };
    case ApplyJobsConstants.APPLIED_JOBS_FAILURE:
      return {
        applyerror: action.error
      };
    default:
      return state
  }
}

function UpdateStatus(state = {}, action) {
  switch (action.type) {
    case ApplyJobsConstants.UPDATE_STATUS_REQUEST:
      return {
        Applyjobs: action.jobs
      };
    case ApplyJobsConstants.UPDATE_STATUS_SUCCESS:
      return {
        Appliedjobs: action.jobs
      };
    case ApplyJobsConstants.UPDATE_STATUS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}


export {Applyjobs,Appliedjobs,UpdateStatus}