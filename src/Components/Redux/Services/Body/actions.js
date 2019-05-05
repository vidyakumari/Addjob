import { bodyConstants } from '../Body/constants';
import { bodyService } from '../Body/service';
import { history } from '../../history/history';

export const bodyActions = {
  getJobs
};

function getJobs() {
  return dispatch => {
    dispatch(request());
    bodyService.getJobs()
      .then((jobs) => {
        dispatch(success(jobs));
        history.push('/');
      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request() { return { type: bodyConstants.JOBS_REQUEST } }
  function success(jobs) { return { type: bodyConstants.JOBS_SUCCESS, jobs } }
  function failure(error) { return { type: bodyConstants.JOBS_FAILURE, error } }
}