import React, {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./TreeDrawer.css";
import backgndImage from "../../media/backgnd.jpg";

// @ts-ignore
import Graph from "react-graph-vis"
import {options} from "../../types/graphSettings";
import {cat} from "./cat";

export interface ITreeDrawerProps {
    width?:number;
    height?:number;
};

const TreeDrawer: React.FC<ITreeDrawerProps> = (props) => {
    const nodes   = useTypedSelector(state => state.tree?.nodes); //graph
    const edges   = useTypedSelector(state => state.tree?.edges);

    let graphDefault: {nodes: Array<any>, edges: Array<any>} = {
        nodes: [],
        edges: []
    };

    const [graph, setGraph] = useState({...graphDefault});
    const [graphKey, setGraphKey] = useState(0);

    useEffect(()=> {
        if (nodes && edges) {

            for (let i = 0; i < nodes.length; i++) {
                nodes[i].label = nodes[i].person.name + " " + nodes[i].person.surname;
                //nodes[i].image = require("../../media/cat.jpg");
            }
            let curGraph: { nodes: Array<any>, edges: Array<any> } = {
                nodes: [...nodes],
                edges: [...edges]
            };
            setGraph({...curGraph});
            setGraphKey(graphKey+1);
        }
    }, [nodes, edges])

    const dispach = useDispatch();

    if (!nodes || !edges)
        return <h1>
            НАСРАНО
        </h1>

    const events = {
        select: function(event: any) {
            var { nodes, edges } = event;
        }
    };


    return (
        <div id="TreeDrawer">
            <Graph
                style={{
                    backgroundImage: `url(${backgndImage})`,
                    backgroundSize: "cover",
                    height: "100%",
                    width: "100%"}}
                key = {graphKey}
                graph={graph}
                options={options}
                events={events}
                getNetwork={() => {}}
            />
            <img src={cat}/>
        </div>
    );
}

export default TreeDrawer;