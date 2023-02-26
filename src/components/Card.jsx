import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return(
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
      {/* <img alt = 'items' src = {`${props.items.lisiting_image}`} style = {{width:200 , height:200}} /> */}
      <div className='card'>
        {console.log(props)}
        <h2>{props.items.listing_name}</h2>
        <a href={`${props.items.media_website}`}> Website </a>
        <p> Contact: {props.items.contact_name} ({props.items.contact_email})</p>
        <p> Location: {props.items.location_address}</p>
      </div>
    </div>
  );
}

export default Card;