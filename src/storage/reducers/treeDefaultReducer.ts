import {Reducer} from "react";
import {ITreeAction, TreeActionTypes} from "../actions/treeAction";
import TimelineDate from "../../types/TimelineDate";

export interface Inode {
   id: number,
   label: string,
   title: string
}

export interface Iedge {
    from: number,
    to: number
}

export interface ITreeDefaultState {
   nodes: Array<Inode>,
   edges: Array<Iedge>
}

const defaultTreeDefaultState: ITreeDefaultState = {
    nodes: [
        {
            id: 1,
            label: "node1",
            title: "desc node1"

        },
        {
            id: 2,
            label: "node2",
            title: "desc node2"
        }
    ],
    edges: [
        {
            from: 1,
            to: 2
        }
    ]
}

export const treeDefaultReducer: Reducer<ITreeDefaultState | undefined,ITreeAction> = (state = defaultTreeDefaultState, action) => {
    switch (action.type) {
        case TreeActionTypes.CREATE_LINK: return state;
        case TreeActionTypes.CREATE_NODE:
            if(!action.payload) return state;
            return {...state, nodes: {...state.nodes}, edges: {...state.edges}}
        case TreeActionTypes.REMOVE_LINK: return state;
        case TreeActionTypes.REMOVE_NODE: return state;
        default                         : return state;
    }

}