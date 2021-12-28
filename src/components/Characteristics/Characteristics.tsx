import React, { useState } from "react";
import TimelineDate from "../../types/TimelineDate";
import "./Characteristics.css";
import IPerson from "../../types/interfaces/IPerson";

/* нужно переместить*/
export type OnChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

function Characteristics(props: { isEditing: boolean }) {
  /* начальную инициализацию нужно изменить при загрузке персонажа*/
  const [person, setPerson] = useState<IPerson>({
    name: "name",
    surname: "surname",
    patronymic: "patronymic",
    birth: new TimelineDate(0, 0, 0, 0, 0, 0),
    death: new TimelineDate(0, 0, 0, 0, 0, 0),
  });

  let isEditing = props.isEditing;

  return (
    <div style={{ display: "grid" }}>
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

/* возвращает строку*/
function ShowString(props: { string: string }) {
  return <h4>{props.string}</h4>;
}

/* возвращает элемент input, на вход подаются дефолтное значение и функция обработки изменения значения поля ввода*/
function ReturnInput(props: {
  defaultVal: string;
  handleChange: OnChangeFunction;
}) {
  return (
    <input
      defaultValue={props.defaultVal}
      onChange={props.handleChange}
    ></input>
  );
}
/* Компонент, который может быть полем ввода или заголовком в зависимости от isEditing*/
function FieldCharacteristic(props: {
  fieldName: string; //Название поля
  isEditing: boolean;
  handleChange: OnChangeFunction; // Функция обработки изменения поля
  showString: string; // Значение поля
}) {
  return (
    <div className="divCharacteristics">
      <ShowString string={props.fieldName} />
      {props.isEditing ? (
        <ReturnInput
          defaultVal={props.showString}
          handleChange={props.handleChange}
        />
      ) : (
        <ShowString string={props.showString} />
      )}
    </div>
  );
}
