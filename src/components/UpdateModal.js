import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateCard}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.name} name="name"/>
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.img} name="img"/>
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>level</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.level} name="level"/>
                                
                            </Form.Group>

                            
                            <Button variant="primary" type="submit">
                                update
                            </Button>
                        </Form>
                    </Modal.Body>
                    
                </Modal>
            </div>
        )
    }
}

export default UpdateModal
