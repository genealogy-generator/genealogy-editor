import { Reducer } from "redux";
import { IGenaLink } from "../../generator/generate";
import IUpdateLinkAction from "../actions/linkActions";
import { gena } from "./characterReducer";


type ILinkState = Array<IGenaLink>
const linkDefaultState: ILinkState = []
export const linksReducer: Reducer<ILinkState | undefined,IUpdateLinkAction> = (state = linkDefaultState, action) => {
    switch (action.type) {
        case "UpdateLinks"               : return [...gena.links];
        default                         : return state;
    }
}