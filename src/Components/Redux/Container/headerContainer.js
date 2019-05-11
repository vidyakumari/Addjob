import { connect } from 'react-redux';
import Header from '../../header';

function mapStateToProps(state) {
    return {}
}

const connectedHeader = connect(mapStateToProps)(Header);

export {
    connectedHeader as Header,
}