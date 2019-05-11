import axios from 'axios'

export const AddjobService = {
    AddJobs,
    editJobs,
    updateJobs
};

async function AddJobs(Profile, Designation, Salary, City, email) {
    return await axios.post('http://localhost:4000/jobs', {
        Profile, Designation, Salary, City, email
    })
    .then((jobs) => {
        if(jobs != null){
        return jobs
        }
        else{
         return false
        }
      })
      .catch(function (error) {
        console.log(error.message)
      });
}

async function editJobs(id) {
  console.log(id)
  return await axios.get('http://localhost:4000/jobs/'+id)
  .then((jobs) => {
    console.log(jobs)
      if(jobs != null){
      localStorage.setItem('job', JSON.stringify(jobs.data))
      return jobs
      }
      else{
       return false
      }
    })
    .catch(function (error) {
      console.log(error.message)
    });
}

async function updateJobs(id, Profile, Designation, Salary, City) {
  return await axios.put('http://localhost:4000/jobs/'+id, {Profile, Designation, Salary, City})
  .then((jobs) => {
      if(jobs != null){
      return jobs
      }
      else{
       return false
      }
    })
    .catch(function (error) {
      console.log(error.message)
    });
}