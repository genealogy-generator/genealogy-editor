import React, { useState } from "react";
import TimelineDate from "../../types/TimelineDate";
import "./Characteristics.css";

function Characteristics() {
  // начальную инициализацию нужно изменить при загрузке персонажа
  const [isEditing, setisEditing] = useState(1);
  const [Text, setText] = useState("Save");
  const [name, setname] = useState("name");
  const [surname, setsurname] = useState("surname");
  const [patronymic, setpatronymic] = useState("patronymic");
  const [birth, setbirth] = useState<TimelineDate>(
    new TimelineDate(0, 0, 0, 0, 0, 0)
  );
  const [death, setdeath] = useState<TimelineDate | null>(
    new TimelineDate(0, 0, 0, 0, 0, 0)
  );

  function handleClick() {
    if (isEditing) {
      setisEditing(0);
      setText("Edit");
    } else {
      setisEditing(1);
      setText("Save");
    }
  }

  return (
    <div style={{ display: "grid" }}>
      <button onClick={handleClick} style={{ width: "100%", height: "2rem" }}>
        {Text}
      </button>
      <div className="divCharacteristics">
        <h4>Name: </h4>
        {isEditing ? (
          <input
            defaultValue={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></input>
        ) : (
          <h4>{name}</h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Surname: </h4>
        {isEditing ? (
          <input
            defaultValue={surname}
            onChange={(e) => {
              setsurname(e.target.value);
            }}
          ></input>
        ) : (
          <h4>{surname}</h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Patronymic: </h4>
        {isEditing ? (
          <input
            defaultValue={patronymic}
            onChange={(e) => {
              setpatronymic(e.target.value);
            }}
          ></input>
        ) : (
          <h4>{patronymic}</h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Date of birth: </h4>
        {isEditing ? (
          <input
            defaultValue={
              String(birth.day) +
              "." +
              String(birth.month) +
              "." +
              String(birth.year)
            }
            onChange={(e) => {
              let obj = new TimelineDate(0, 0, 0, 0, 0, 0);
              Object.assign(obj, birth);
              obj.changeDateString(e.target.value);
              setbirth(obj);
            }}
          ></input>
        ) : (
          <h4>
            {String(birth.day) +
              "." +
              String(birth.month) +
              "." +
              String(birth.year)}
          </h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Date of death: </h4>
        {isEditing ? (
          <input
            defaultValue={
              death
                ? String(death.day) +
                  "." +
                  String(death.month) +
                  "." +
                  String(death.year)
                : "not dead yet"
            }
            onChange={(e) => {
              if (e.target.value.length > 0) {
                let obj = new TimelineDate(0, 0, 0, 0, 0, 0);
                if (typeof death == "object") {
                  Object.assign(obj, death);
                }
                obj.changeDateString(e.target.value);
                setdeath(obj);
              } else {
                setdeath(null);
              }
            }}
          ></input>
        ) : (
          <h4>
            {death
              ? String(death.day) +
                "." +
                String(death.month) +
                "." +
                String(death.year)
              : "not dead yet"}
          </h4>
        )}
      </div>
    </div>
  );
}

export default Characteristics;
