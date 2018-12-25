import React, { Component } from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {
    return(
      <div className='row'>
        <div className='col col-md-12 p-0'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a className='navbar-brand' href='#'><i className='fa fa-calendar-check-o'></i> TodoApp </a>
            <div className='collapse navbar-collapse' id='navbar'>
              <ul className='navbar-nav mr-auto'>
                <li className={this.state.activeIndex === 0 ? 'nav-item active': 'nav-item'} onClick={() => this.setState({activeIndex: 0})}>
                  <a className='nav-link' href='#/todos'>Tarefas</a>
                </li>
                <li className={this.state.activeIndex === 1 ? 'nav-item active': 'nav-item'} onClick={() => this.setState({activeIndex: 1})}>
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
