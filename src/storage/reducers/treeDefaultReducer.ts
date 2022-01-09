import {Reducer} from "react";
import {ITreeAction, TreeActionTypes} from "../actions/treeAction";
import TimelineDate from "../../types/TimelineDate";
import IPerson from "../../types/interfaces/IPerson";
import {cat} from "../../components/TreeDrawer/cat";



export interface Inode {
   id: number,
   label: string,
   title: string,
    person: IPerson,
    shape?: string,
    image: string,
    picURL?: URL,
}

export interface Iedge {
    from: number,
    to: number,
    color?: string,
    dashes?: boolean,
}

export interface ITreeDefaultState {
   nodes: Array<Inode>,
   edges: Array<Iedge>
}

const defaultTreeDefaultState: ITreeDefaultState = {
    nodes: [
        {
            id: 1,
            label: "",
            title: "",
            person: {

                name: "bibao",
                surname: "le pupani",
                patronymic: "p",
                birth: new TimelineDate(0,0,0,0,0,0),
                death: null
            },
            shape: "circularImage",
            image: cat,
        },
        {
            id: 2,
            label: "",
            title: "",
            person: {

                name: "bobaan",
                surname: "le pupani",
                patronymic: "pg",
                birth: new TimelineDate(0,0,1,0,0,0),
                death: null
            },
            shape: "circularImage",
            image: cat,
        },
        {
            id: 3,
            label: "",
            title: "",
            person: {

                name: "Леха",
                surname: "Спицын",
                patronymic: "pg",
                birth: new TimelineDate(0,0,1,0,0,0),
                death: null
            },
            shape: "circularImage",
            image: cat,

        }
    ],
    edges: [
        {
            from: 1,
            to: 2,
            //color: '#841281'
        },
        {
            from: 1,
            to: 3,
            color: '#841281',
            dashes: true
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