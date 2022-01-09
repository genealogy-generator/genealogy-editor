import { AnyAction } from "redux"
import Id from "../../types/Id"


/**
 * @param payload Id if selected character
 */
interface ISelectCharacter extends AnyAction{
    type: "SelectCharacter",
    payload?:Id
}

interface ISwitchEditCharacter extends AnyAction{
    type: "SwitchEditCharacter",
    payload?:boolean
}

type IApplicationAction = ISelectCharacter | ISwitchEditCharacter
export default IApplicationAction
