import { AnyAction } from "@reduxjs/toolkit";
import { ITreeLink, ITreeNode } from "../../types/treeTypes";

export enum TreeActionTypes {
    CREATE_NODE,
    REMOVE_NODE,
    CREATE_LINK,
    REMOVE_LINK
}

export interface ITreeRemoveLinkAction extends AnyAction{
    type: TreeActionTypes.REMOVE_LINK;
    payload?: ITreeLink;
}
export interface ITreeRemoveNodeAction extends AnyAction{
    type: TreeActionTypes.REMOVE_NODE;
    payload?: Number;
}
export interface ITreeCreateLinkAction extends AnyAction{
    type: TreeActionTypes.CREATE_LINK;
    payload?: ITreeLink;
}
export interface ITreeCreateNodeAction extends AnyAction{
    type: TreeActionTypes.CREATE_NODE;
    payload?: ITreeNode;
}

export type ITreeAction = ITreeRemoveLinkAction | ITreeRemoveNodeAction | ITreeCreateLinkAction | ITreeCreateNodeAction


