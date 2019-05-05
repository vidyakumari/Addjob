import { connect } from 'react-redux';
import Addjob from '../../Addjob'

function mapStateToProps(state) {
    return {
    }

}

const connectedAddjob = connect(mapStateToProps)(Addjob);

export {
    connectedAddjob as Addjob
}