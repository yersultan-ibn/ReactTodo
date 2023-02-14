import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {Component, useState} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Ерсултан',
          salary: 350000,
          increase: true,
          id: 1
        }, {
          name: 'Султан',
          salary: 250000,
          increase: false,
          id: 2
        }, {
          name: 'Итачи',
          salary: 990000,
          increase: true,
          id: 3
        }
      ]
    }
  }
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop]
          }
        }
        return item
      })
    }))
  }
  render() {
    const {data} = this.state;
    const employees = data.length;
    const increased = data
      .filter(item => item.increase)
      .length

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList data={data} onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm/>
      </div>
    )
  }
}

export default App;
