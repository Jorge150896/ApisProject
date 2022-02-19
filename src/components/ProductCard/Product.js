import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import Countdown from 'react-countdown';
import './Product.scss';

export const Product = (props) => {
  const { product, timemin, timemax } = props;

  //Para obtener un numero aleatorio
  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const time = Math.round(getRandom(timemax, timemin));

  // Para saber cuando culmina el conteo
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <Link to={`/product/${product.id}`} className="disabled-link">
          <Button style={{ backgroundColor: 'Gray', color: 'white' }}>
            Bloqueado
          </Button>
        </Link>
      );
    } else {
      // Render a countdown
      return (
        <Link to={`/product/${product.id}`}>
          <Button>Go to Detail</Button>
        </Link>
      );
    }
  };
  console.log(renderer);
  return (
    <Col xs={12} sm={6} md={4} className="product">
      <Fade>
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <div className="product__info">
              <Card.Subtitle>Price: $ {product.price}</Card.Subtitle>
              <Countdown date={Date.now() + parseInt(time + '000')} />
            </div>
            <Countdown
              date={Date.now() + parseInt(time + '000')}
              renderer={renderer}
            />
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};
export default Product;
