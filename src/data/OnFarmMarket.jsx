import { Component, useState } from 'react'
import '../App.css'
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';

class OnFarmMarket extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    // const cat = useLocation().state
    // console.log(cat);
    // trying different input is not currently working well for Amherst or MA
    fetch(`https://www.usdalocalfoodportal.com/api/onfarmmarket/?apikey=aVaBkb74fj&x=42&y=72&radius=30\\`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }
  render(){
    
    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{
      return (
        <div className="App">
          <h1> On Farm Markets </h1>
          {/* <Scroll> */}
          {/* Fetched data is accessed by Card */}
            {items.data.map(item => (
              <Card items={item}/>
            ))};
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default OnFarmMarket;