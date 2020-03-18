import React from 'react';
import PropTypes from 'prop-types';

function Food ({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
};

Food .propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "hamburger",
    image: "https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://lh3.googleusercontent.com/vHCXoi2mj9pexNAbo3tDuhs9sdM2Pw_t_XlSqcrmmN4_OBapYVGB7od1bRM8EXYgldgOy8EjEA=w1080-h608-p-no-v0",
    rating: 4.9
  },
  {
    id: 3,
    name: "Pasta",
    image: "https://www.thespruceeats.com/thmb/hJtP5QhBfZayjUD7RCyVbydJHtk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-885397466-5c0cc0634cedfd00012758a7.jpg",
    rating: 5.5
  },
  {
    id: 4,
    name: "Steak",
    image: "https://hips.hearstapps.com/vidthumb/images/delish-cajun-butter-steak-still006-1528495387.jpg",
    rating: 4.8
  }
]



function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        /> )}
    </div>
  );
};

export default App;
