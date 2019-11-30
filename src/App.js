import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Addcar from './components/addcar';
import Carcat from './components/carcat';
import Edit from './components/edit';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/addcar">Add Car</Nav.Link>
              <Nav.Link href="/carcat">Car Catalogue</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/addcar" component={Addcar} />
            <Route path="/carcat" component={Carcat} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
