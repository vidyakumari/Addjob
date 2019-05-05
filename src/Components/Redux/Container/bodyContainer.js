import {connect} from 'react-redux';
import Card from '../../cardshow'
import Body from '../../body'

function mapStateToProps(state) {
   const {jobs} = state.jobs
   return {
       jobs: jobs
   }
  }
  
  const connectedCard = connect(mapStateToProps)(Card);
  const connectedBody = connect(mapStateToProps)(Body);
  
  export {
      connectedCard as Card,
      connectedBody as Body
  }