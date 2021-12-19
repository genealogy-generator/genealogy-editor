import { AnyAction } from "@reduxjs/toolkit";
import { ITreeLinkRelation } from "../../types/interfaces/ITreeLinkRelation";

export enum TreeActionTypes {
    CREATE_NODE,
    REMOVE_NODE,
    CREATE_LINK,
    REMOVE_LINK
}

export interface ITreeRemoveLinkAction extends AnyAction{
    type: TreeActionTypes.REMOVE_LINK;
    payload?: any;
}
export interface ITreeRemoveNodeAction extends AnyAction{
    type: TreeActionTypes.REMOVE_NODE;
    payload?: Number;
}
export interface ITreeCreateLinkAction extends AnyAction{
    type: TreeActionTypes.CREATE_LINK;
    payload?: any;
}
export interface ITreeCreateNodeAction extends AnyAction{
    type: TreeActionTypes.CREATE_NODE;
    payload?: ITreeLinkRelation;
}

export type ITreeAction = ITreeRemoveLinkAction | ITreeRemoveNodeAction | ITreeCreateLinkAction | ITreeCreateNodeAction


