import React from 'react';
import '../styles/modal.css';
import '../styles/scrollModal.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick = (event) => {
        event.stopPropagation();
    }

    render() {
        return (
            <article className={this.props.isOpen ? 'modal is-open' : 'modal'} onClick={this.props.closeModal}>
                <div className="modal-container" onClick = {this.handleClick}>
                    <button className="modal-close" onClick={this.props.closeModal}>X</button>
                    {this.props.children}
                </div>
            </article>
        );
    }
}
