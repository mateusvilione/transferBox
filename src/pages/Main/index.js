import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import "./styles.css";

export default class Main extends Component {
  state = {
    newBox: '',
  };
  
  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.newBox);
  };

  handleInputChange  = event => {
    this.setState({ newBox: event.target.value });
  };

  render() {
    return (
        <main id="main-container">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt=""/>
                <input 
                  placeholder="Criar um box" 
                  value={this.state.newBox}
                  onChange={this.handleInputChange}
                />
                <button type="submit">Criar</button>
            </form>
        </main>
    );
  }
}
