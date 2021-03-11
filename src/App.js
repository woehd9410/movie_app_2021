import React from "react";

function Food({name, picture}){
  return ( <div>
    <h2>I like {name} </h2>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    name  : "Kimchi",
    image : "https://contents.sixshop.com/thumbnails/uploadedFiles/72878/product/image_1540176020065_1000.jpg"
  },
  {
    name  : "Samgeopsal",
    image : "asdf"
  },
  // {
  //   name  : "CooKumi",
  //   image : "sd"
  // },
  // {
  //   name : "Bibimbap",
  //   image : "df"
  // }
];

function App() {
  return (
  <div>
    {foodILike.map( dish =>(
      <Food name={dish.name} picture={dish.image} />
    ))}
  </div>
  );
} 

export default App;
