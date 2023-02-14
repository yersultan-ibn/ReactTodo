import { useState } from "react";
import "./employees-list-item.css";

const EmployeesListItem = ({ name, salary, increase, rise, onToggleProp }) => {
  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }

  if (rise) {
    classNames += " like";
  }
  return (
    <li
      className={classNames}
      data-toggle="rise"
      onClick={onToggleProp}
    >
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "тнг"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
