import React from 'react'
import { Link } from 'react-router-dom'
import ChatApp from '../chat/ChatApp';

class ChatModal extends React.Component {
    appliedUser = JSON.parse(localStorage.getItem('appliedJobs'));
    User = JSON.parse(localStorage.getItem('user'));

    state = { show: false }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <main>
                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <ChatApp />
                </Modal>
                {/* <button type='button' onClick={this.showModal}></button> */}
                <Link onClick={this.showModal} className="fa fa-commenting" aria-hidden="true">Chat</Link>
            </main>
        )
    }
}
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button className="btn btn-link"
                    onClick={handleClose}
                >
                    Close
          </button>
            </section>
        </div>
    );
};

export default ChatModal;