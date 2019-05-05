import {connect} from 'react-redux';
import Updatejob from '../../updateJob'

function mapStateToProps(state) {
   const {jobs} = state.jobs
   return {
       jobs: jobs
   }
  }
  
  const connectedEdit = connect(mapStateToProps)(Updatejob);
  export {
      connectedEdit as Updatejob
  }