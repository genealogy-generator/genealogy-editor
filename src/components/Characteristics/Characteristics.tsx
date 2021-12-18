import React, { useState } from "react";
import TimelineDate from "../../types/TimelineDate";
import "./Characteristics.css";

function Characteristics() {
  //временно. Начальная инициализация при загрузке страницы
  let br = new TimelineDate(0, 0, 0, 0, 0, 0);

  const [isEditing, setisEditing] = useState(1);
  const [Text, setText] = useState("Save");
  const [name, setname] = useState("Name");
  const [surname, setsurname] = useState("Surname");
  const [patronymic, setpatronymic] = useState("Patronymic");
  const [birth, setbirth] = useState(br);
  const [death, setdeath] = useState<TimelineDate | null>(null);

  function handleClick() {
    if (isEditing) {
      setisEditing(0);
      setText("Edit");
      //setname();
      //setsurname();
      //setpatromymic();
      //setbirth();
      //setdeath();
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
          <input defaultValue={name} id="characteristicsName"></input>
        ) : (
          <h4>{name}</h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Surname: </h4>
        {isEditing ? (
          <input defaultValue={surname} id="characteristicsSurname"></input>
        ) : (
          <h4>{surname}</h4>
        )}
      </div>
      <div className="divCharacteristics">
        <h4>Patronymic: </h4>
        {isEditing ? (
          <input
            defaultValue={patronymic}
            id="characteristicsPatronymic"
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
            id="characteristicsDateBirth"
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
                : "present time"
            }
            id="characteristicsDateDeath"
          ></input>
        ) : (
          <h4>
            {death
              ? String(death.day) +
                "." +
                String(death.month) +
                "." +
                String(death.year)
              : "present time"}
          </h4>
        )}
      </div>
    </div>
  );
}

export default Characteristics;
