import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import HashLoader from 'react-spinners/HashLoader';
import Particle from '../../components/Particle/Particle';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

import './ProductDetail.scss';

const ProductDetail = () => {
  const { productId } = useParams();

  const { loading, result } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  console.log(result);
  return (
    <div className="contentProduct">
      <Particle />

      <div className="row productInfo">
        {loading || !result ? (
          <HashLoader color={'#5f00d1'} size={100} />
        ) : (
          <>
            <Slide
              className="col col-12 col-md-5 productInfo__contentleft--orden"
              direction="down"
            >
              <div className="productInfo__contentleft">
                <img
                  src={result.image}
                  alt=""
                  className="productInfo__contentleft__image"
                />
              </div>
            </Slide>
            <Slide
              className="col col-12 col-md-7 productInfo__contentright--orden "
              direction="down"
            >
              <div className="productInfo__contentright">
                <h2 className="productInfo__contentright__title">
                  {result.title}
                </h2>
                <p className="productInfo__contentright__description">
                  {result.description}
                </p>
                <div className="productInfo__contentright__extras">
                  <div className="col col-xs-6 ">
                    <p>Price:</p>
                    <p className="productInfo__contentright__extras__datos">
                      $ {result.price}
                    </p>
                  </div>
                  <div className="col col-xs-6 ">
                    <p>Category:</p>
                    <p className="productInfo__contentright__extras__datos">
                      {result.category}
                    </p>
                  </div>
                </div>
                <div className="productInfo__contentright__buttone">
                  <Link to={`/`}>
                    <Button>Volver</Button>
                  </Link>
                </div>
              </div>
            </Slide>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
