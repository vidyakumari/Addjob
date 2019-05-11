import axios from 'axios'

export const bodyService = {
  getJobs
};

async function getJobs() {
  return await axios.get('http://localhost:4000/jobs')
    .then(async (jobs) => {
      localStorage.setItem('jobs', JSON.stringify(jobs.data))
      await axios.get('http://localhost:4000/jobsapplieds')
        .then((jobs) => {
          localStorage.setItem('appliedJobs', JSON.stringify(jobs.data))
        })
      if (jobs.data !== null) {
        return jobs.data.reverse()
      }
      else {
        return false
      }
    })
    .catch(function (error) {
      console.log(error.message)
    });
}