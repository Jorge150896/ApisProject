import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './Phphotho.scss';

export const Phphotho = (props) => {
  const { phProduct } = props;

  return (
    <Col xs={12} sm={6} md={4} className="phPhoto">
      <Fade>
        <Card>
          <Card.Img variant="top" src={phProduct.url} />
          <Card.Body>
            <Card.Title>{phProduct.title}</Card.Title>
            <div className="phPhoto__info">
              <Card.Subtitle>ID: {phProduct.id}</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};
export default Phphotho;
