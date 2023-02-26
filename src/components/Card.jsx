import React from 'react';
import {Link} from 'react-router-dom';


const Card = (props) => {
  return(
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
      {/* <img alt = 'items' src = {`${props.items.lisiting_image}`} style = {{width:200 , height:200}} /> */}
      <div>
        {console.log(props)}
        <h2>{props.items.listing_name}</h2>
        <p>{props.items.listing_desc}</p>
        {/* <Link to='/details' state= {props}> Know In Details </Link> */}
      </div>
    </div>
  );
}

export default Card;