import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Dinner = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("/dinner.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div id="dinner">
            <Container>
                <Row lg={3} xs={1} className="g-4 ">

                    {
                        foods.map(food => <Col
                            key={food.name}
                        >
                            <Card className="py-3">
                                <Card.Img className="w-50 mx-auto" src={food.img} alt="" />
                                <Card.Title>{food.name}</Card.Title>
                                <small>{food.details.slice(0, 40)}</small>
                                <Card.Title>{food.price}</Card.Title>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Dinner;