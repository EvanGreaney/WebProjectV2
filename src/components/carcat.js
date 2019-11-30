import React from 'react'
import Cars from './cars';
import axios from 'axios';


class CarCat extends React.Component{
constructor(){
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
}
    state = {
        cars: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/cars')
        .then((response)=>{
            this.setState({cars: response.data.cars})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/cars')
        .then((response)=>{
            this.setState({cars: response.data.cars})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Welcome to the Car Catalogue</h1>
                <Cars mycars={this.state.cars} ReloadDataMethod={this.ReloadDataMethod} ></Cars>
            </div>
        );
    }
}
export default CarCat;