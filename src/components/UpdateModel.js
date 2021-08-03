import React, { Component } from 'react'
import { Modal, Button,Form } from 'react-bootstrap'

export class UpdateModel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton onClick={this.props.close}>
                        <Modal.Title>Update Color</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.updateColor}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Color Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.fav.name} name='Cname'/>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Color Img</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.fav.img} name='Cimg'/>
                            </Form.Group>

                            <Button variant="warning" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateModel
