import { bodyConstants } from './constants';

function jobs(state = {}, action) {
  switch (action.type) {
    case bodyConstants.JOBS_REQUEST:
      return {
        jobs: action.jobs
      };
    case bodyConstants.JOBS_SUCCESS:
      return {
        jobs: action.jobs
      };
    case bodyConstants.JOBS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

export {jobs}