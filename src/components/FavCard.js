import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'


export class FavCard extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={4} className="g-4">
                    {this.props.favData.map((val, idx) => (
                        <Col>
                            <Card key={idx} bg='secondary' border="warning">
                                <Card.Img variant="top" src={val.img} />
                                <Card.Body>
                                    <Card.Title>{val.name}</Card.Title>
                                    <Button variant="danger" onClick={() => this.props.delete(idx)}>Delete</Button>

                                    <Button variant="success" onClick={() => this.props.showModel(idx)}>Update</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default FavCard
