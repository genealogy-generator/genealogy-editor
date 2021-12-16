import { Reducer   } from "@reduxjs/toolkit";
import { ITreeNode } from "../../types/interfaces/ITreeNode";
import { ITreeAction, TreeActionTypes } from "../actions/treeAction";

export interface ITreeState {
    node: ITreeNode;
}
/*

*/
const treeDefaultState: ITreeState = {
    node: {relations:[],type:"root"}
}



export const treeReducer: Reducer<ITreeState | undefined,ITreeAction> = (state = treeDefaultState,action) => {
    switch (action.type) {
        case TreeActionTypes.CREATE_LINK: return state; //return {...state}
        case TreeActionTypes.CREATE_NODE:
            if(!action.payload) return state; 
            return {...state, node: {...state.node,relations:[...state.node.relations,action.payload]}}
        case TreeActionTypes.REMOVE_LINK: return state;
        case TreeActionTypes.REMOVE_NODE: return state; //return {...state, nodes: [...state.nodes.filter(val => val == action.payload)]}
        default                         : return state;
    } 
}