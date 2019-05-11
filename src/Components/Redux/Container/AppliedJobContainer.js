import { connect } from 'react-redux';
import JobsAppliedList from '../../JobsAppliedList';

function mapStateToProps(state) {
    const { Appliedjobs, applyerror } = state.Appliedjobs
    return {
        Appliedjobs,
        applyerror
    }
}

const connectedJobAppliedList = connect(mapStateToProps)(JobsAppliedList);


export {
    connectedJobAppliedList as JobsAppliedList,
}