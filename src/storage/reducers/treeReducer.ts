import { Reducer   } from "@reduxjs/toolkit";
import { ITreeNode } from "../../types/interfaces/ITreeNode";
import { ITreeAction, TreeActionTypes } from "../actions/treeAction";
import ITreeNodeCharacter from "../../types/interfaces/ITreeNodeCharacter";
import {ITreeLinkRelation} from "../../types/interfaces/ITreeLinkRelation";
import TimelineDate from "../../types/TimelineDate";

export interface ITreeState {
    nodes: Map<number, ITreeNode>,
    edges: Map<number, number>
}
/*
    Будет type nodes
*/
const treeDefaultState: ITreeState = {
    nodes: new Map([[0, {
        relations:[],
        type: "character",
        name: "n",
        surname: "s",
        patronymic: "p",
        birth: new TimelineDate(0,0,0,0,0,0),
        death: null
    }],
        [1, {
            relations:[],
            type: "character",
            name: "n1",
            surname: "s1",
            patronymic: "p1",
            birth: new TimelineDate(1,0,0,1,0,0),
            death: null
        }]
    ]),
    edges: new Map([[0,1]])
}

export const treeReducer: Reducer<ITreeState | undefined,ITreeAction> = (state = treeDefaultState,action) => {
    switch (action.type) {
        case TreeActionTypes.CREATE_LINK: return state; //return {...state}
        case TreeActionTypes.CREATE_NODE:
            if(!action.payload) return state; 
            return {...state, nodes: {...state.nodes}, edges: {...state.edges}}
        case TreeActionTypes.REMOVE_LINK: return state;
        case TreeActionTypes.REMOVE_NODE: return state; //return {...state, nodes: [...state.nodes.filter(val => val == action.payload)]}
        default                         : return state;
    } 
}