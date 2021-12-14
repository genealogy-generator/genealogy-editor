import { tmpdir } from "os";
import React from "react";
import Person from "./person";

function Characteristics() {
  return (
    <div>
      <label>Name</label>
      <input id="name"></input>
      <label>Surname</label>
      <input id="surname"></input>
      <label>Patronymic</label>
      <input id="patronymic"></input>
      <label>Date of birth</label>
      <input id="datebirth"></input>
      <label>Date of death</label>
      <input id="datedeath"></input>
    </div>
  );
}

export default Characteristics;
