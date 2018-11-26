import React from 'react';
import axios from 'axios';

import Features from './components/Features.jsx';
import TechSpecs from './components/TechSpecs.jsx';


class Productdescriptions extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "Features",
      descriptions: [],
      product: []
    }
  }

  componentDidMount(){
    let id = window.location.pathname.replace(/\/product\//,'') || 1000;
      axios.get('/product/data/' + id)
        .then(productData =>{
          this.setState({
            product: productData.data
          })
        })
        .catch(err => {
          console.log("Error with server side fetch request",err);
        })
  }
  changeView(){
    if(this.state.view === "Features"){
      this.setState({
        view:"TechSpecs"
      })
    } else{
      this.setState({
        view:"Features"
      })
    }
  }

  renderView() {
    const {view} = this.state;
    if(view === "Features"){
      return <Features features={this.state.product.features}/>
    }else if (view === "TechSpecs"){
      return <TechSpecs techSpecs={this.state.product.techSpecs}/>
    }
  }
  render() {
    return(
      <div>
      <p className="nittyGritty"><strong>Product Details</strong></p>
      <div className="tabs">
      <button id="switchState"
        onClick={() => this.changeView()}>
        {this.state.view}
      </button>
      {this.renderView()}
      </div>
      </div>
    );
  }
}

export default Productdescriptions;
