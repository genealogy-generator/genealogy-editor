import React from "react";
import { OnChangeFunction } from "../../../types/OnChangeFunction";

// возвращает строку, почти бесполезно
function ShowString(props: { string: string }) {
    return <h4>{props.string}</h4>;
}

// возвращает элемент input, на вход подаются дефолтное значение и функция обработки изменения значения поля ввода
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
export interface IFieldCharacteristicProps {
    fieldName: string; //Название поля
    isEditing: boolean;
    handleChange: OnChangeFunction; // Функция обработки изменения поля
    showString: string; // Значение поля
};

// Компонент, который может быть полем ввода или заголовком в зависимости от isEditing]
const FieldCharacteristic: React.FC<IFieldCharacteristicProps> = (props) => {
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

export default FieldCharacteristic;