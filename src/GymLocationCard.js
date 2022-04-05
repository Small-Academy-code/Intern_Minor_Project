import React from "react"
function GymLocationCard({state, cities, image, image_label}) {
  return (
    <div className="gymLocationCard">
      <div className="state">{state}</div>
      <div className="cities">{cities}</div>
      <div className="img">
        <img className="gym_image" src={image}/>
        <br />
        <label>{image_label}</label>
      </div>
    </div>
  )
}

export default GymLocationCard;