import { useState } from "react";
import TimelineDate from "../../types/TimelineDate";
import "./Characteristics.css";
import IPerson from "../../types/interfaces/IPerson";
import FieldCharacteristic from "../ui/FieldCharacteristic/FieldCharacteristic";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

function Characteristics() {
  // начальную инициализацию нужно изменить при загрузке персонажа
  const characters = useTypedSelector(state => state.characters)
  const charId     = useTypedSelector(state => state.app?.editedId)
  const isEditing  = useTypedSelector(state => state.app?.isEditing)
  const dispatch = useTypedDispatch()

  const [Text, setText] = useState("Edit");
  //Move id to redux storage
  const [person, setPerson] = useState<IPerson>();
  if(typeof isEditing === "undefined") {
    dispatch({type:"SwitchEditCharacter",payload:true})
    return (<h2>NOT INISALIZED</h2>)
  }
  if(!characters) return (<h2>NOT INISALIZED</h2>)
  const character = characters.find(v => v.id.valueOf() === (charId?charId.valueOf():0))
  if (!character) return (<div >
    <h2>CHARACTER UNFOUND</h2>
    <button onClick={()=>{
          dispatch({type:"GenearateDynasty"})
          dispatch({type:"UpdateLinks"})
        }}>GENERATE DYNASTY</button>
    </div>)
  if(!person) {
    setPerson(character);
    return (<h2>PERSON IS NULL</h2>)
  }
  if(person.id.valueOf() !== character.id.valueOf()) setPerson(character);

  function handleClick() {
    if (isEditing) {
      console.log(person);
      dispatch({type:"UpdateCharacter",payload:person});
      dispatch({type:"SwitchEditCharacter",payload:false})
      setText("Edit");
    } else {
      dispatch({type:"SwitchEditCharacter",payload:true})
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
          TimelineDate.changeDateString(obj,e.target.value);
          setPerson({ ...person, birth: obj });
        }}
        showString={TimelineDate.returnDateAsString(person.birth)}
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
            TimelineDate.changeDateString(obj,e.target.value);
            setPerson({ ...person, death: obj });
          } else {
            setPerson({ ...person, death: null });
          }
        }}
        showString={
          person.death ? TimelineDate.returnDateAsString(person.death) : "not dead yet"
        }
      />
    </div>
  );
}

export default Characteristics;
