import React from "react"
function LocationCards(props){
  console.log(props.data)
  return(
    <div className="card-container">
      <div className="img-container">
      <img src={props.item.imageUrl} 
      height='200' width="168" 
      alt="location" className="card-image"/>
      </div>
      <div className="information-container">
      <i class="fa-solid fa-location-dot"></i>
      <span className="location">{props.item.location }</span>
      <a href="#" className="google-link"> View on Google Maps</a>
      <h1> {props.item.title}</h1>
      <span className="date"> {props.item.startDate}</span>
      <span className="date"> {props.item.endDate}</span>
      <p> {props.item.description}</p>
      
      </div>
    </div>
  )
}


export default LocationCards