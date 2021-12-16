import {  Reducer } from "@reduxjs/toolkit";
import { ITreeLinkRelation, ITreeNode } from "../../types/treeTypes";
import { ITreeAction, TreeActionTypes } from "../actions/treeAction";

export interface ITreeState {
    links: Map<Number,ITreeLinkRelation>,
    nodes: Array<ITreeNode>
}

const treeDefaultState: ITreeState = {
    links: new Map<Number,ITreeLinkRelation>(),
    nodes: new Array<ITreeNode>()
}


export const treeReducer: Reducer<ITreeState | undefined,ITreeAction> = (state = treeDefaultState,action) => {
    switch (action.type) {
        case TreeActionTypes.CREATE_LINK: return state; //return {...state}
        case TreeActionTypes.CREATE_NODE: return state;//return {...state, nodes: [...state.nodes,action.payload]}
        case TreeActionTypes.REMOVE_LINK: return state;
        case TreeActionTypes.REMOVE_NODE: return state; //return {...state, nodes: [...state.nodes.filter(val => val == action.payload)]}
        default                         : return state;
    } 
}