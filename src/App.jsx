import { Component, useState } from 'react'
import './App.css'
import Card from './components/Card';
import { useLocation } from 'react-router-dom';

class App extends Component{
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
          <h1> Selected Farms </h1>
          {/* <Scroll> */}
            {items.data.map(item => (
              <Card items={item}/>
            ))};
          {/* </Scroll> */}
        </div>
      );
    }
  }
}

export default App;
