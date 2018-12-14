import React, { Component } from 'react';

export default class Menu extends Component {

  render() {
    return(
      <div className='row'>
        <div className='col col-md-12 p-0'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='#'><i className='fa fa-calendar-check-o'></i> TodoApp </a>
            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <a className='nav-link' href='#/todos'>Tarefas</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#/about'>Sobre</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
