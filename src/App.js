import { useEffect, useState } from 'react';
import axios from 'axios';
import bannerImage from './assets/banner.jpg';
import './App.scss';
import { ProductCard } from './components/ProductCard.js';


const App = () => {
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: 'Running Shoes',
      brand: 'Nike',
      price: 59.99,
      image: 'running_shoes.jpg',
      description:
        'These running shoes provide excellent cushioning and support.',
      category: 'Sports',
      shoeCategory: 'Running',
      rating: 4.5,
      reviews: 10,
      availability: true,
    },
  ]);
  useEffect(() => {
    const fetchShoes = async () => {
      console.log(`${process.env.REACT_APP_API_URL}/get-shoes`);

      axios
        .get(`${process.env.REACT_APP_API_URL}/get-shoes`, {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
              'Origin, X-Requested-With, Content-Type, Accept',
          },
        })
        .then((response) => {
          // Handle the successful response
          console.log(response.data);
          setShoes(response.data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error, 'there was an error fetching data');
        });

      // fetch(`${process.env.REACT_APP_API_URL}/get-shoes`)
      //   .then((response) => response.json())
      //   .then((response) => {
      //     console.log(response, 'shoes sucessfully retrieved');
      //     setShoes(response);
      //   })
      //   .catch((error) =>
      //     console.log('something went wrong with getting shoes', error)
      //   );
    };
    fetchShoes();
  }, []);
  return (
    <div className='homepage'>
      <div
        className='homepage__banner'
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className='homepage__banner-overlay d-flex align-items-center pl-4'>
          <h1 className='ml-4'>Shoes</h1>
        </div>
      </div>
      {/* a simple header comes in here */}
      <div className='homepage__main container mt-5'>
        {shoes.map((shoe) => (
          <ProductCard product={shoe} key={shoe.id} />
        ))}
      </div>
      {/* add a card here you can loop over and display */}
    </div>
  );
};

export default App;
