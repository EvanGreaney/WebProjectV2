import React from 'react';
import axios from 'axios';
class Edit extends React.Component{
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
            axios.put("http://localhost:4000/api/cars/" + this.state._id, 
            newCar)
            .then()
            .catch();

          this.setState({Model:'',
                  Year:'',
                Image:''});    
  }
    componentDidMount(){
        alert(this.props.match.params.id);

        axios.get("http://localhost:4000/api/cars/" + this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id:response.data._id,
                Model:response.data.Model,
                Year:response.data.year,
                Image:response.data.Image
            })
        })
        .catch();
    }
    render(){
        return(
            <div>
                 <h1>Hello from Edit component</h1>
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
          value="Edit Car">
          </input>
        </div>
        </form>
            </div>
        )
    }
}

export default Edit;