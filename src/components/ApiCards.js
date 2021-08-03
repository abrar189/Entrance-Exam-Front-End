import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';

export class ApiCards extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={4} className="g-4">
                    {this.props.colorsData.map((val, idx) => (
                        <Col>
                            <Card key={idx} bg='secondary' border="warning">
                                <Card.Img variant="top" src={val.img} />
                                <Card.Body>
                                    <Card.Title>{val.name}</Card.Title>
                                    {this.props.auth0.isAuthenticated && <Button variant="info" onClick={() => this.props.addToFav(idx)}>Add to Fav</Button>}
                                </Card.Body>

                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default withAuth0(ApiCards)
