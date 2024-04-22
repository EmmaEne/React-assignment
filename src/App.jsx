import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// App.jsx

//create your array of objects, pass in your data.
const heroData = [
  //previous mistakes correction: a new object for each.
  {
    //create a key.
    id: 1,
    imageUrl: "../houses.jpg",
    title: "Neveda, New-york",
    description: "Stay with Roberta - wellness advocate",
  },
  {
    id: 2,
    imageUrl: "../hmes-3.jpg",
    title: "Turin, Italy",
    description: "Stay with Golwen",
  },
  {
    id: 3,
    imageUrl: "../houses-2.jpg",
    title: "Milan, Italy",
    description: "Stay with Valentina - indoor designer",
  },
  {
    id: 4,
    imageUrl: "../houses-2.jpg",
    title: "Milan, Italy",
    description: "Stay with Valentina - indoor designer",
  },
  {
    id: 5,
    imageUrl: "../houses.jpg",
    title: "Neveda, New-york",
    description: "Stay with Roberta - wellness advocate",
  },
  {
    id: 6,
    imageUrl: "../hmes-3.jpg",
    title: "Turin, Italy",
    description: "Stay with Golwen",
  },
  {
    id: 7,
    imageUrl: "../houses-2.jpg",
    title: "Milan, Italy",
    description: "Stay with Valentina - indoor designer",
  },
  {
    id: 8,
    imageUrl: "../houses-2.jpg",
    title: "Milan, Italy",
    description: "Stay with Valentina - indoor designer",
  },
  // Add more hero data objects as needed
];

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div key={heroData.id}>
        {/* to map, 
        i. the array.map(), a parameter, could be anything. 
        ii. call the component, pass your props inside it.

        TRY THIS OUT AGAIN!!!!!!!
        */}
        {heroData.map((hero) => (
          <Hero
            imageUrl={hero.imageUrl}
            title={hero.title}
            description={hero.description}
          />
        ))}
      </div>
    </>
  );
};

export default App;
