import axios from 'axios'

export const bodyService = {
    getJobs
};

async function getJobs() {
    return await axios.get('http://localhost:4000/jobs') 
        .then((jobs) => {
          if(jobs.data !== null){
          return jobs.data.reverse()
          }
          else{
           return false
          }
        })
        .catch(function (error) {
          console.log(error.message)
        });
}