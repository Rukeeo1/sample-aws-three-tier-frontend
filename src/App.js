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
    // {
    //   id: 2,
    //   name: 'Running Shoes',
    //   brand: 'Nike',
    //   price: 59.99,
    //   image: 'running_shoes.jpg',
    //   description:
    //     'These running shoes provide excellent cushioning and support.',
    //   category: 'Sports',
    //   shoeCategory: 'Running',
    //   rating: 4.5,
    //   reviews: 10,
    //   availability: true,
    // },
    // {
    //   id: 3,
    //   name: 'Running Shoes',
    //   brand: 'Nike',
    //   price: 59.99,
    //   image: 'running_shoes.jpg',
    //   description:
    //     'These running shoes provide excellent cushioning and support.',
    //   category: 'Sports',
    //   shoeCategory: 'Running',
    //   rating: 4.5,
    //   reviews: 10,
    //   availability: true,
    // },
    // {
    //   id: 1,
    //   name: 'Running Shoes',
    //   brand: 'Nike',
    //   price: 59.99,
    //   image: 'running_shoes.jpg',
    //   description:
    //     'These running shoes provide excellent cushioning and support.',
    //   category: 'Sports',
    //   shoeCategory: 'Running',
    //   rating: 4.5,
    //   reviews: 10,
    //   availability: true,
    // },
  ]);
  useEffect(() => {
    const fetchShoes = async () => {
      // this is a test app, ignore the console.log
      console.log(`${process.env.REACT_APP_API_URL}/get-shoes`);

      axios
        .get(`${process.env.REACT_APP_API_URL}/get-shoes`, {
          headers: {
            Accept: '*/*',
          },
        })
        .then((response) => {
          // Handle the successful response
          console.log(response.data, 'data retrieved');
          setShoes(response.data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error, 'there was an error fetching data');
        });
    };
    fetchShoes();
  }, []);
  return (
    <div className='homepage'>
      <div
        className='homepage__banner d-flex align-items-center'
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className='homepage__brand-message'>
          <h1 className='ml-4'>Shoeshine</h1>
          <p className='mt-2'>
            Step into style and comfort with our exquisite collection of shoes.
          </p>
          <div >
            <button className='btn-cta'>Voor hem</button>
            <button className='btn-cta ml-4'>Voor hem</button>
          </div>
        </div>

        <div className='homepage__banner-overlay d-flex align-items-center pl-4'></div>
      </div>
      {/* a simple header comes in here */}
      <div className='homepage__main mt-5 px-5'>
        {shoes.map((shoe, index) => (
          <ProductCard product={shoe} imageId={index} key={shoe.id} />
        ))}
      </div>
      {/* add a card here you can loop over and display */}
    </div>
  );
};

export default App;
