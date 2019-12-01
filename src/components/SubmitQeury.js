import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class SubmitQuery extends React.Component {
  constructor(props){
    super(props);

    this.state = {Query:'',
                  Email:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    
  }
  
  handleQuery(e){
    this.setState({Query: e.target.value});
  }

  handleEmail(e){
    this.setState({Email: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Query+ "      " + this.state.Email);
    e.preventDefault();
                const newQuery = {
                  Query: this.state.Query,
                  Email: this.state.Email
                };
          axios.post('http://localhost:4000/api/queries',newQuery) 
          .then()
          .catch();
          

          this.setState({Query:'',
                  Email:''});    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Query</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Query}
          onChange={this.handleQuery}
          ></input>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Email}
          onChange={this.handleEmail}
          ></input>
        </div>
        <div>
          <input
          type="submit"
          value="Submit Query">
          </input>
        </div>
        </form>
      </div>
    );
  }
}

export default SubmitQuery;