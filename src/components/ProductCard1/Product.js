import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

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
              <Card.Subtitle>$ {product.price}</Card.Subtitle>
              <p>Hora</p>
            </div>
            <Link to={`/product/${product.id}`}>
              <Button>Go to Detail</Button>
            </Link>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};
export default Product;
