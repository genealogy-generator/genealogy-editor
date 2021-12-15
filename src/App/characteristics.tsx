import React, { useState } from "react";

function Characteristics() {
  const [isEditing, setisEditing] = useState(1);
  const [Text, setText] = useState("Edit");

  function handleClick() {
    if (isEditing) {
      setisEditing(0);
      setText("Edit");
    } else {
      setisEditing(1);
      setText("Save");
    }
    //console.log(isEditing);
  }

  return (
    <div style={{ display: "grid" }}>
      <button onClick={handleClick} style={{ width: "100%", height: "2rem" }}>
        {Text}
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
          Name:{" "}
        </h4>
        {isEditing ? (
          <input style={{ width: "15rem", height: "2rem" }}></input>
        ) : (
          <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
            name
          </h4>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
          Surname:{" "}
        </h4>
        {isEditing ? (
          <input style={{ width: "15rem", height: "2rem" }}></input>
        ) : (
          <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
            surname
          </h4>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
          Patronymic:{" "}
        </h4>
        {isEditing ? (
          <input style={{ width: "15rem", height: "2rem" }}></input>
        ) : (
          <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
            patronymic
          </h4>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
          Date of birth:{" "}
        </h4>
        {isEditing ? (
          <input style={{ width: "15rem", height: "2rem" }}></input>
        ) : (
          <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
            datebirth
          </h4>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
          Date of death:{" "}
        </h4>
        {isEditing ? (
          <input style={{ width: "15rem", height: "2rem" }}></input>
        ) : (
          <h4 style={{ width: "12rem", height: "2rem", alignItems: "center" }}>
            datedeath
          </h4>
        )}
      </div>
    </div>
  );
}

export default Characteristics;
