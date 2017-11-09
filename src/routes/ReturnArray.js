import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ReturnArray extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
    this.onCallSwapi = this.onCallSwapi.bind(this);
    this.onCallSwapi();
  }

  onCallSwapi() {
    axios.get(`https://swapi.co/api/people/1/`)
    .then((res) => {
      // console.log(res.data);
      this.setState({ data: res.data });
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  render() {
    let data = this.state.data;
    console.log(data);
    if (data) {
      const { name, birth_year, eye_color, height, mass, skin_color, hair_color } = data;
      console.log(name, birth_year, eye_color, height, mass, skin_color, hair_color);
      const arr = [ name, birth_year, eye_color, height, mass, skin_color, hair_color ];
      console.log('arrrrrr ', arr);

      // const [ name, birth_year, eye_color, height, mass, skin_color, hair_color ] =  data

    }



    // let stuff;
    // if (this.state.data) {
    //     {  } = this.state.data;
    // }

    // let data = this.state.data && [
    //   { value: "One", key: "1" },
    //   { value: "Two", key: "2" },
    //   { value: "Three", key: "3" }
    // ];
    // return this.state.data && this.state.data.vehicles.map(ship => {
    //   return (
    //     <li key={ship.key}>
    //       {ship.value}
    //     </li>
    //   );
    // })

    return [
    <p key="1"><Link to={``}>Link to: </Link></p>,
    <p key="2"><Link to={``}>Link to: </Link></p>
  ];



    // (
    //   <div id="test-div">
    //     <h1>Return with an array </h1>
    //
    //     <button onClick={this.callSwapi}>Make call to swapi</button>
    //
    //   { this.state.data && (
    //     <div>
    //       <img src={`${character}.png`} alt={`${character} image`} />
    //
    //       <h3>Response from swapi:</h3>
    //       <pre><code>{JSON.stringify(this.state.data, null, 4)}</code></pre>
    //
    //     </div>
    //   )
    //   }
    //
    //   </div>
    // )
  }
}

export default ReturnArray;
