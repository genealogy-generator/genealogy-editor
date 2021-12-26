import React, { useState, useReducer } from "react";
import TimelineDate from "../../types/TimelineDate";
import "./Characteristics.css";
import IPerson from "../../types/interfaces/IPerson";
import FieldCharacteristic from "../ui/FieldCharacteristic/FieldCharacteristic";

function Characteristics() {
  // начальную инициализацию нужно изменить при загрузке персонажа
  const [isEditing, setisEditing] = useState(false);
  const [Text, setText] = useState("Edit");

  const [person, setPerson] = useState<IPerson>({
    name: "name",
    surname: "surname",
    patronymic: "patronymic",
    birth: new TimelineDate(0, 0, 0, 0, 0, 0),
    death: new TimelineDate(0, 0, 0, 0, 0, 0),
  });

  function handleClick() {
    if (isEditing) {
      setisEditing(false);
      setText("Edit");
    } else {
      setisEditing(true);
      setText("Save");
    }
  }

  return (
    <div style={{ display: "grid" }}>
      <button onClick={handleClick} style={{ width: "100%", height: "2rem" }}>
        {Text}
      </button>
      <FieldCharacteristic
        fieldName={"Name: "}
        isEditing={isEditing}
        handleChange={(e) => {
          setPerson({ ...person, name: e.target.value });
        }}
        showString={person.name}
      />
      <FieldCharacteristic
        fieldName={"Surname: "}
        isEditing={isEditing}
        handleChange={(e) => {
          setPerson({ ...person, surname: e.target.value });
        }}
        showString={person.surname}
      />
      <FieldCharacteristic
        fieldName={"Patronymic: "}
        isEditing={isEditing}
        handleChange={(e) => {
          setPerson({ ...person, patronymic: e.target.value });
        }}
        showString={person.patronymic}
      />
      <FieldCharacteristic
        fieldName={"Birth Date: "}
        isEditing={isEditing}
        handleChange={(e) => {
          let obj = new TimelineDate(0, 0, 0, 0, 0, 0);
          Object.assign(obj, person.birth);
          obj.changeDateString(e.target.value);
          setPerson({ ...person, birth: obj });
        }}
        showString={person.birth.returnDateAsString()}
      />
      <FieldCharacteristic
        fieldName={"Death Date: "}
        isEditing={isEditing}
        handleChange={(e) => {
          if (e.target.value.length > 0) {
            let obj = new TimelineDate(0, 0, 0, 0, 0, 0);
            if (typeof person.death == "object") {
              Object.assign(obj, person.death);
            }
            obj.changeDateString(e.target.value);
            setPerson({ ...person, death: obj });
          } else {
            setPerson({ ...person, death: null });
          }
        }}
        showString={
          person.death ? person.death.returnDateAsString() : "not dead yet"
        }
      />
    </div>
  );
}

export default Characteristics;
