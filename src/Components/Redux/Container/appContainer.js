import {connect} from 'react-redux'
import App from '../../../App'
function mapStateToProps(state) {
   return {}
  }
  
  const connectedApp = connect(mapStateToProps)(App);
  
  export {
      connectedApp as App
  }