import React, { useState } from "react";
import Characteristics from "../Characteristics/Characteristics";
import "./CharacterRedactor.css";

function CharacterRedactor() {
  const [isEditing, setIsEditing] = useState(false);
  const [Text, setText] = useState("Edit");

  const [linesArr, setLinesArr] = useState<
    { id: string; lineName: string; description: string }[]
  >([]);
  const [isOpen, setIsOpened] = useState(1);

  const closeClickHandler = () => {
    setIsOpened(0);
  };

  const editHandler = () => {
    if (isEditing) {
      setIsEditing(false);
      setText("Edit");
    } else {
      setIsEditing(true);
      setText("Save");
    }
  };

  const linesArrClickHandler = () => {
    setLinesArr((linesArr) => {
      return [
        ...linesArr,
        {
          id: new Date().getTime().toString(),
          lineName: "Event",
          description: "Description",
        },
      ];
    });
  };

  return isOpen ? (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn" onClick={closeClickHandler}>
          Close
        </button>
        <button onClick={editHandler} className="btn">
          {Text}
        </button>
        <button className="btn" onClick={linesArrClickHandler}>
          New Line
        </button>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          borderBottom: "1px solid #000",
        }}
      >
        <img
          src=""
          style={{ height: "17vw", width: "13vw", marginRight: "1rem" }}
        />
        <Characteristics isEditing={isEditing} />
      </div>
      <div>
        {linesArr.map((line) => {
          const { id, lineName, description } = line;
          return (
            <LineEdit
              isEditing={isEditing}
              id={id}
              lineName={lineName}
              description={description}
              linesArray={linesArr}
              setLinesArray={setLinesArr}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default CharacterRedactor;

/*Запись о пресонаже. Можно редактировать*/
function LineEdit(props: {
  isEditing: boolean;
  id: string;
  lineName: string;
  description: string;
  linesArray: { id: string; lineName: string; description: string }[];
  setLinesArray: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        lineName: string;
        description: string;
      }[]
    >
  >;
}) {
  const [lineName, setLineName] = useState(props.lineName);
  const [description, setDescription] = useState(props.description);
  return props.isEditing ? (
    <div
      key={props.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "8rem",
      }}
    >
      <div style={{ display: "grid" }}>
        <input
          defaultValue={lineName}
          onChange={(e) => {
            setLineName(e.target.value);
          }}
        />
        <input
          defaultValue={props.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button
        style={{ width: "2rem", height: "2rem" }}
        onClick={() => {
          let newArr = props.linesArray.filter((line) => {
            if (line.id !== props.id) {
              return line;
            }
          });
          props.setLinesArray(newArr);
        }}
      />
    </div>
  ) : (
    <div key={props.id} style={{ height: "8rem" }}>
      <h4>{lineName}</h4>
      <p>{description}</p>
    </div>
  );
}
