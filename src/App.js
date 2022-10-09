import React from 'react';
import './App.css';
import NavBar from './NavBar';
import LocationCards from './LocationCard';
import Form from "./Form"
import data from "./data"

function App() {
  const cards = data.map(item =>{
    return(
      <LocationCards 
        key={item.id}
        item= {item}
      
      />
    )
  })

  return (
    <div >
      <NavBar/>
      <Form />
    {cards}
    </div>
  );
}

export default App;
