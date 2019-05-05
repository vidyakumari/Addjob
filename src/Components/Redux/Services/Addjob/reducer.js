import { AddjobConstants } from './constants';

function Addjobs(state = {}, action) {
  switch (action.type) {
    case AddjobConstants.JOBS_REQUEST:
      return {
        jobs: action.jobs
      };
    case AddjobConstants.JOBS_SUCCESS:
      return {
        jobs: action.jobs
      };
    case AddjobConstants.JOBS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}

export {Addjobs}