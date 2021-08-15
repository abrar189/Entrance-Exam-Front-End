import React, { Component } from 'react'
import { Card,Row,Col,Button } from 'react-bootstrap'


export class Cardapi extends Component {
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.props.myData.map((item, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.level}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="primary"onClick={()=>{this.props.addTofav(idx)}} >add to fav</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Cardapi
