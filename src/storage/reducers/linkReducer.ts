import { Reducer } from "redux";
import { IGenaLinkAsILink, ILink } from "../../types/interfaces/ILink";
import IUpdateLinkAction from "../actions/linkActions";
import { gena } from "./characterReducer";


type ILinkState = Array<ILink>
const linkDefaultState: ILinkState = []
export const linksReducer: Reducer<ILinkState | undefined,IUpdateLinkAction> = (state = linkDefaultState, action) => {
    switch (action.type) {
        case "UpdateLinks"               : return [...gena.links.filter(v => v.type === "child").map(IGenaLinkAsILink)];
        default                         : return state;
    }
}