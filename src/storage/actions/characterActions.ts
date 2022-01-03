import { AnyAction } from "redux"
import Id from "../../types/Id"
import IPerson from "../../types/interfaces/IPerson"


/**
 * @param payload seed for genarator if undefined it will be random 
 */
interface IGenearateDynasty extends AnyAction{
    type: "GenearateDynasty",
    payload?:number
}

/**
 * @param payload data of new person, if undefined in will be a default value 
 */
interface ICreateNewCharacter extends AnyAction {
    type: "CreateNewCharacter",
    payload?:IPerson
}

/**
 * @param payload id of person to delete
 */
interface IDeleteCharacter extends AnyAction {
    type: "DeleteCharacter",
    payload:Id
}
/**
 * @param payload updated character data
 */
interface IUpdateCharacter extends AnyAction {
    type: "UpdateCharacter",
    payload:IPerson,
}

type ICharacterAction = IGenearateDynasty | ICreateNewCharacter | IDeleteCharacter | IUpdateCharacter
export default ICharacterAction