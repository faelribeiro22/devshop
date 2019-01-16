import React, { Component } from 'react';
import '../components/style.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            Hello
          </a>
          <form action="#" className="navbar-flex">
            <div className="input-group-prepend">
              <input type="search" className="form-control" placeholder="Digite o nome do desenvolvedor, linguagem de programação"/>
              <button type="submit" className="input-group-text button-go">Go!</button>
            </div>
          </form>
          <button className="btn btn-primary">Entrar</button>
        </div>
      </nav>
    )
  }
}
