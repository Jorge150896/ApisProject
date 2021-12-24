import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Countdown from 'react-countdown';
import './Product.scss';

export const Product = (props) => {
  const { product } = props;

  return (
    <Col xs={12} sm={6} md={4} className="product">
      <Fade>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <div className="product__info">
              <Card.Subtitle>Price: $ {product.price}</Card.Subtitle>
              <Countdown date={Date.now() + 50000} />
            </div>
            <Link to={`/product/${product.id}`} /* className="disabled-link" */>
              <Button>Go to Detail</Button>
            </Link>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};
export default Product;
