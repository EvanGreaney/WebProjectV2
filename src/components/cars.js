import React from 'react';
import CarItem from './carItem.js';

class Cars extends React.Component{

    render(){
        return this.props.mycars.map((cars)=>{
            return <CarItem key={cars._id} car={cars} 
            ReloadDataMethod={this.props.ReloadDataMethod}></CarItem>
        });
    }
}
export default Cars;