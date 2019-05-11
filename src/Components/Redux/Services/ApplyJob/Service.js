import axios from 'axios'

export const ApplyjobService = {
  ApplyJobs, AppliedJobs,UpdateStatus
};

async function ApplyJobs(email, id) {
  return await axios.post('http://localhost:4000/jobsapplied', {
    email, id
  })
    .then((jobs) => {
      if(jobs.data.isApplied === 'true') {
        return jobs.data.isApplied;
      } else {
        return jobs.data
      }
    })
    .catch(function (error) {
      console.log(error.message)
    });
}

async function AppliedJobs(Company) {
  return await axios.get('http://localhost:4000/jobsapplieds')
    .then((jobs) => {
      localStorage.setItem('appliedJobs',JSON.stringify(jobs.data))
      const filter = jobs.data.filter((item) => {
        if (item.jobsDetails.Company === Company) {
          return true;
        }
        if(item.userDetails.fullname === Company){
          return true;
        }
        return false
      })
      console.log(filter)
      return filter;
    })
    .catch(function (error) {
      console.log(error.message)
    });
}

async function UpdateStatus(id,Status) {
  console.log(id,Status)
  return await axios.put('http://localhost:4000/updateStatus',{id,Status})
    .then((jobs) => {
          return true;
        })
    .catch(function (error) {
      console.log(error.message)
    });
}


