import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { useState } from "react";

const App = (props) => {
  const dataArr = [
    {
      name: "Ерсултан",
      salary: 350000,
      increase: true,
      id: 1,
    },
    {
      name: "Султан",
      salary: 250000,
      increase: false,
      id: 2,
    },
    {
      name: "Итачи",
      salary: 990000,
      increase: false,
      id: 3,
    },
  ];

  const [data, setData] = useState(dataArr);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [maxId, setMaxId] = useState(4);

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: setMaxId(maxId + 1),
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const onDelete = (id) => {
    const dataId = data.filter((item) => item.id !== id);
    setData(dataId);
  };

  const onToggleProp = (id, prop) => {
    const dataProp = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          [prop]: !item[prop],
        };
      }
      return item;
    });

    setData(dataProp);
  };

  const searchEmp = (items, term) => {
    if (term.length < 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onUpdateFilter = (filter) => {
    setFilter(filter);
  };

  const visibleData = filterPost(searchEmp(data, term), filter);
  const employees = visibleData.length;
  const increased = visibleData.filter((item) => item.increase).length;
  return (
    <div className="app">
      <AppInfo employees={employees} increased={increased} />

      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter onUpdateFilter={onUpdateFilter} />
      </div>

      <EmployeesList
        data={visibleData}
        onToggleProp={onToggleProp}
        onDelete={onDelete}
      />
      <EmployeesAddForm addItem={addItem} />
    </div>
  );
};

export default App;
