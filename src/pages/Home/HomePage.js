import Product from '../../components/ProductCard/Product';
import useFetch from '../../hooks/useFetch';
import GridLoader from 'react-spinners/GridLoader';
import Particle from '../../components/Particle/Particle';

import './HomePage.scss';

const HomePage = () => {
  const { loading, result } = useFetch(`https://fakestoreapi.com/products`);

  console.log(result);

  return (
    <>
      <div className="contentHome">
        <Particle />
        <div className="homeSection">
          {loading || !result ? (
            <GridLoader color={'#5f00d1'} size={25} />
          ) : (
            result.map((product) => (
              <Product
                product={product}
                timemin={10}
                timemax={30}
                key={product.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
