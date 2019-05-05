import { AddjobConstants } from '../Addjob/constants';
import { AddjobService } from '../Addjob/service';
import { history } from '../../history/history';

export const AddjobActions = {
  AddJobs,
  editJobs,
  updateJobs
};

function AddJobs(Profile, Designation, Salary, City, email) {
  return dispatch => {
    dispatch(request(Profile, Designation, Salary, City, email));
    AddjobService.AddJobs(Profile, Designation, Salary, City, email)
      .then((jobs) => {
        dispatch(success(jobs));
        history.push('/');
      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request() { return { type: AddjobConstants.JOBS_REQUEST } }
  function success(jobs) { return { type: AddjobConstants.JOBS_SUCCESS, jobs } }
  function failure(error) { return { type:  AddjobConstants.JOBS_FAILURE, error } }
}

function editJobs(id) {
  return dispatch => {
    dispatch(request(id));
    AddjobService.editJobs(id)
      .then((editjobs) => {
        dispatch(success(editjobs));
        history.push('/updatejobs');
      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request() { return { type: AddjobConstants.EDIT_JOBS_REQUEST } }
  function success(editjobs) { return { type: AddjobConstants.EDIT_JOBS_SUCCESS, editjobs } }
  function failure(error) { return { type:  AddjobConstants.EDIT_JOBS_FAILURE, error } }
}

function updateJobs(id, Profile, Designation, Salary, City) {
  return dispatch => {
    dispatch(request(id, Profile, Designation, Salary, City));
    AddjobService.updateJobs(id, Profile, Designation, Salary, City)
      .then((updatejobs) => {
        dispatch(success(updatejobs));
        history.push('/');
        localStorage.removeItem('job');
      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request() { return { type: AddjobConstants.UPDATE_JOBS_REQUEST } }
  function success(updatejobs) { return { type: AddjobConstants.UPDATE_JOBS_SUCCESS, updatejobs } }
  function failure(error) { return { type:  AddjobConstants.UPDATE_JOBS_FAILURE, error } }
}