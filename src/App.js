// import Potato from "./potato";

import React from 'react';
import ProsTypes from 'prop-types';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

function Food( { name, picture, rating } ) {
  // console.log(props);
  return (
    <div>
      <h3>I love { name }</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
    )
  }

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.namu.wiki/i/oqkbH6Ff5ehja1bgs6sQt8Hw7Sdt8SjjEm7vhwVoWbQt0NrTldI7UhPYXN8NCT1ZPX465nyzp_PYTwgSm6JdZMNMMzIV7qH28V596wW7hJfnzo9HSsyD9GPuIdYjPu9V4oMYCIxOTX6mtsPd6cOaFQ.webp",
    rating: 4.3
  }, {
    id: 2,
    name: "Samgyeopsal",
    image: "https://i.namu.wiki/i/vGy4kAbo4Ud8gdlwT3Mi1dvZacfxVN-JjLSOjGYX6tvXU8j1E2w6cDkh3iqNJH_VJ5SnyJ5_OIhRHafmKtH3COivOfwCKgJNzAaFwlLyWg7Rc2AD_4m_cqfogYyfBvV4ppuvflV4P_qtcMbKW0b1gA.webp",
    rating: 4.9
  }, {
    id: 3,
    name: "Bibimbap",
    image: "https://i.namu.wiki/i/C5_9p3_Wyn9JPs2VkQtZJpqJRhkiuuRXKL8HAwjrYw_vEd3_JG5YKyDA5v_YHn1A8yFGt2pK3F22SJuMF4CzoxtL_neeIRoRyglrRWwxKwp7W2J5hUiBy74SuRvwIj2s9I1db___fVKdxtcQfgj-8Q.jpg",
    rating: 4.5
  }, {
    id: 4,
    name: "Doncasu",
    image: "https://i.namu.wiki/i/H26VUpYzDOjiqPfTOGCFW3yHKoBlGGDvMM9elVNv-4_PcmibamMFT6eiiCrxeFYtHRqJ_nNEnmv8T25a7l2udZkjGGGhgEqIalXCG6n_puVZ-nAIVazDK_WNKYYUajDTMSBbg1cYNJXbo-AVUljmYA.webp",
    rating: 4.7
  }, {
    id: 5,
    name: "Kimbap",
    image: "https://i.namu.wiki/i/8w5dGPqUgSYNTQIzIzTF_mNBb43SGJqC0w3gFBTfggTDQzRcYyMwdTEubb0LIJPMF2n_ZgAhMLfroIo4403jn0cspt2J4EWu-0XJn2lFV79h4WVjQzROqG37qtdyD1YHGWUkAyIimjwIcSX9qs8mcg.webp",
    rating: 4.4
  }
];

function renderFood(dish) {
  return(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)
}

function App() {
  return (
    // <div className="App">
    //   Hello
    // </div>
    <div>
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
      {/* <Food fav="kimchi"/>
      <Food fav="Samgyeopsal"/>
      <Food fav="Bibimbap"/>
      <Food fav="Doncasu"/>
      <Food fav="Kimbap"/> */}
    </div>
  );
}

Food.ProsTypes = {
  name: ProsTypes.string.isRequired,
  picture: ProsTypes.string.isRequired,
  rating: ProsTypes.number.isRequired,
}

// something={true} papapapa={['hello',1,2,3,4,true]} 
// dish =>(<Food name={dish.name} picture={dish.image} />)
export default App;
