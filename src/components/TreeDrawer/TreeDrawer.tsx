import React, {useEffect, useState} from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./TreeDrawer.css";
import backgndImage from "../../media/backgnd.jpg";

// @ts-ignore
import Graph from "react-graph-vis"
import { IPersonAsINode } from "../../types/interfaces/IPerson";

export interface ITreeDrawerProps {
    width?:number;
    height?:number;
};

const TreeDrawer: React.FC<ITreeDrawerProps> = () => {
    const nodes   = useTypedSelector(state => state.characters); //graph
    const edges   = useTypedSelector(state => state.links);

    let graphDefault: {nodes: Array<any>, edges: Array<any>} = {
        nodes: [],
        edges: []
    };

    const [graph, setGraph] = useState({...graphDefault});
    const [graphKey, setGraphKey] = useState(0);

    useEffect(()=> {
        if (nodes && edges) {
            let curGraph: { nodes: Array<any>, edges: Array<any> } = {
                nodes: [...nodes.map(IPersonAsINode)],
                edges: [...edges]
            };
            setGraph({...curGraph});
            setGraphKey(graphKey+1);
        }
    }, [nodes, edges, graphKey])

    if (!nodes || !edges)
        return <h1>
            НАСРАНО
        </h1>

    const events = {
        select: function(event: any) {
            // eslint-disable-next-line
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
        height: "1163px", //image height
        width: "80%",
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
        </div>
    );
}

export default TreeDrawer;