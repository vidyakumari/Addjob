import { ApplyjobService } from '../ApplyJob/Service';
import { history } from '../../history/history';
import { ApplyJobsConstants } from '../ApplyJob/constants';

export const ApplyjobActions = {
  ApplyJobs, AppliedJobs, UpdateStatus
};

function ApplyJobs(email, id) {
  return dispatch => {
    dispatch(request(email, id));
    ApplyjobService.ApplyJobs(email, id)
      .then((jobs) => {
        console.log(jobs)
        if (jobs === 'true') {
          alert('You have already applied')
          dispatch(failure('You have already applied'))
        }
        dispatch(success(jobs));
        history.push('/');
      })
      .catch((error) => {
        dispatch(failure(error));
        history.push('/');
      })
  };

  function request() { return { type: ApplyJobsConstants.APPLY_JOBS_REQUEST } }
  function success(jobs) { return { type: ApplyJobsConstants.APPLY_JOBS_SUCCESS, jobs } }
  function failure(error) { return { type: ApplyJobsConstants.APPLY_JOBS_FAILURE, error } }
}

function AppliedJobs(Company) {
  return dispatch => {
    dispatch(request(Company));
    ApplyjobService.AppliedJobs(Company)
      .then((jobs) => {
        console.log(jobs)
        dispatch(success(jobs));
        history.push('/AppliedJobs');
      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request() { return { type: ApplyJobsConstants.APPLIED_JOBS_REQUEST } }
  function success(jobs) { return { type: ApplyJobsConstants.APPLIED_JOBS_SUCCESS, jobs } }
  function failure(error) { return { type: ApplyJobsConstants.APPLIED_JOBS_FAILURE, error } }
}

function UpdateStatus(id,Status) {
  return dispatch => {
    dispatch(request(id));
    ApplyjobService.UpdateStatus(id,Status)
      .then((jobs) => {
        dispatch(success(jobs));
        history.push('/AppliedJobs');

      })
      .catch((error) => {
        dispatch(failure(error));
      })
  };

  function request(id) { return { type: ApplyJobsConstants.UPDATE_STATUS_REQUEST, id } }
  function success(jobs) { return { type: ApplyJobsConstants.UPDATE_STATUS_SUCCESS, jobs } }
  function failure(error) { return { type: ApplyJobsConstants.UPDATE_STATUS_FAILURE, error } }
}