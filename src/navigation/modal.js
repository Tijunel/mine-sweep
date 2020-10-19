import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({ showModal: this.props.showModal });
        }
    }

    render = () => {
        return (
            <Modal show={this.state.showModal} onHide={this.props.modalInfo.failureCallback} top>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modalInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.modalInfo.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.modalInfo.successCallback}>
                        Continue
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}