import React, {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ITreeAction, TreeActionTypes } from "../../storage/actions/treeAction";
import TimelineDate from "../../types/TimelineDate";

// @ts-ignore
import Graph from "react-graph-vis"


export interface ITreeDrawerProps {
    width?:number;
    height?:number;
};



const TreeDrawer: React.FC<ITreeDrawerProps> = (props) => {
    const nodes   = useTypedSelector(state => state.tree?.nodes); //graph
    const edges   = useTypedSelector(state => state.tree?.edges);

    /*const graphDefault: {nodes: Array<any>, edges: Array<any>} = {
        nodes: [

        ],
        edges: [

        ]
    };
    const [graph, setGraph] = useState({...graphDefault});
*/

    const dispach = useDispatch();

    const rendNodes: Array<any> = []
    const rendEdges: Array<any> = []
    let a;
    if (!nodes || !edges)
        return <h1>
            НАСРАНО
        </h1>

        // ERROR
        //setGraph({nodes: [...rendNodes], edges: [...rendEdges]});
        const graphDefault: {nodes: Array<any>, edges: Array<any>} = {
            nodes: nodes,
            edges: edges
        };

    const events = {
        select: function(event: any) {
            var { nodes, edges } = event;
        }
    };

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };

    return (
        <div>
            <h2>
                {JSON.stringify(graphDefault)}
                </h2>
            <Graph
                graph={graphDefault}
                options={options}
                events={events}
                getNetwork={() => {}}
            />

            <button onClick={()=>{
                dispach({
                    type:TreeActionTypes.CREATE_NODE,payload:{
                        object:{
                            birth: new TimelineDate(0,0,Math.round(Math.random()*Number(props.width)),0,0,0),
                            relations:[],
                            type:"character"
                        },
                        type:"",
                    }})
            }}></button>
        </div>
    );
}

export default TreeDrawer;