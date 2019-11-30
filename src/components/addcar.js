import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class AddCar extends React.Component {
  constructor(props){
    super(props);

    this.state = {Model:'',
                  Year:'',
                Image:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarModelChange = this.handleCarModelChange.bind(this);
    this.handleCarYearChange = this.handleCarYearChange.bind(this);
    this.handleCarImageChange = this.handleCarImageChange.bind(this);
  }
  
  handleCarModelChange(e){
    this.setState({Model: e.target.value});
  }

  handleCarYearChange(e){
    this.setState({Year: e.target.value});
  }

  handleCarImageChange(e){
    this.setState({Image: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Model+ "      " + this.state.Year 
    +"       "+ this.state.Image);
    e.preventDefault();
    
    
                const newCar = {
                  Model: this.state.Model,
                  year: this.state.Year,
                  Image: this.state.Image
                };
          axios.post('http://localhost:4000/api/cars',newCar) 
          .then()
          .catch();
          

          this.setState({Model:'',
                  Year:'',
                Image:''});    
  }

  render() {
    return (
      <div>
        <h1>Hello from Create component</h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Car Model</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Model}
          onChange={this.handleCarModelChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Car Year</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleCarYearChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Car Image Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Image}
          onChange={this.handleCarImageChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Add Car">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default AddCar;