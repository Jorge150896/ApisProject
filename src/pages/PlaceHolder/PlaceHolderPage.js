import useFetch from '../../hooks/useFetch';
import GridLoader from 'react-spinners/GridLoader';
import Particle from '../../components/Particle/Particle';
import Phphotho from '../../components/PHphotoCard/Phphotho';

import './PlaceHolderPage.scss';

const PlaceHolderPage = () => {
  const { loading, result } = useFetch(
    `https://jsonplaceholder.typicode.com/photos`
  );

  console.log(result);
  let resultFilter = result.filter((prev) => prev.id <= 100);

  console.log(resultFilter);

  return (
    <>
      <div className="contentPH">
        <Particle />
        <div className="phSection">
          {loading || !result ? (
            <GridLoader color={'#5f00d1'} size={25} />
          ) : (
            resultFilter.map((product) => (
              <Phphotho phProduct={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PlaceHolderPage;
