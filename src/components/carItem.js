import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class CarItem extends React.Component{

  constructor(){
    super();
    this.DeleteCar = this.DeleteCar.bind(this);
  }

  DeleteCar(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/cars/"+this.props.car._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();

  }

    render(){
        return(
           <div>

  <Card border="primary" style={{ width: '28rem' }} width = "2000" height = "2500">
  <Card.Header>{this.props.car.Model}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
    <img src={this.props.car.Image} ></img>
      <footer>
      {this.props.car.year}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>
<Link to={"/edit/" + this.props.car._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default CarItem;