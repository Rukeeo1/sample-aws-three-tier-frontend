import { useEffect, useState } from "react";
import axios from "axios";
import bannerImage from "./assets/banner.jpg";
import "./App.scss";
import { ProductCard } from "./components/ProductCard.js";
import Productlist from "./components/Productlist/Productlist";

const App = () => {
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "Running Shoes",
      brand: "Nike",
      price: 59.99,
      image: "running_shoes.jpg",
      description:
        "These running shoes provide excellent cushioning and support.",
      category: "Sports",
      shoeCategory: "Running",
      rating: 4.5,
      reviews: 10,
      availability: true,
    },
  ]);
  useEffect(() => {
    const fetchShoes = async () => {
      // this is a test app, ignore the console.log
      console.log(`${process.env.REACT_APP_API_URL}/get-shoes`);
      console.log(process.env.REACT_APP_HOST, "host");

      axios
        .get(`${process.env.REACT_APP_API_URL}/get-shoes`, {
          headers: {
            Accept: "*/*",
            Host: process.env.REACT_APP_HOST,
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        })
        .then((response) => {
          // Handle the successful response
          console.log(response.data, "data retrieved");
          setShoes(response.data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error, "there was an error fetching data");
        });
    };
    fetchShoes();
  }, []);
  return (
    <div className="homepage">
      <div
        className="homepage__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* billboard banner content */}
        <div className="homepage__billboard-banner-content d-flex align-items-center">
          <div className="homepage__billboard-header-container">
            <h2 class="homepage__banner-header">Lacoste x Roland-Garros</h2>

            <div class="homepage__banner-title">Game, set and style</div>
          </div>

          <a class="homepage__category-button-him" data-type="category">
            <span>For him</span>
          </a>

          <a class="homepage__category-button-her" data-type="category">
            <span>For her</span>
          </a>
        </div>
        {/* end of billboard banner content */}
      </div>

      {/* productlisting  */}
      <Productlist />

      {/* a simple header comes in here */}
      <div className="homepage__main container mt-5">
        {shoes?.shoes?.map((shoe) => (
          <ProductCard product={shoe} key={shoe.id} />
        ))}
      </div>
      {/* add a card here you can loop over and display */}
    </div>
  );
};

export default App;
