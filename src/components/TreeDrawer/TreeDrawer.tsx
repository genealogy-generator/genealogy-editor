import React, {useEffect, useState} from "react"; // useRef ?
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./TreeDrawer.css";
import backgndImage from "../../media/backgnd.jpg";

// @ts-ignore
import Graph from "react-graph-vis"

import {options} from "../../types/graphSettings";
import { IGraphNode, IPersonAsINode } from "../../types/interfaces/IPerson";
import { IGenaLinkAsILink, ILink } from "../../types/interfaces/ILink";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

export interface ITreeDrawerProps {
    width?:number;
    height?:number;
};


const TreeDrawer: React.FC<ITreeDrawerProps> = () => {
    const nodes   = useTypedSelector(state => state.characters); //graph
    const edges   = useTypedSelector(state => state.links);

    const dispach = useTypedDispatch();

    let graphDefault: {nodes: Array<any>, edges: Array<any>} = {
        nodes: [],
        edges: []
    };

    const [graph, setGraph] = useState({...graphDefault});
    const [graphKey, setGraphKey] = useState(0);

    useEffect(()=> {
        if (nodes && edges) { //title generate in Iperson

            let curGraph: { nodes: Array<IGraphNode>, edges: Array<ILink> } = {
                nodes: [...nodes.filter(v => v.id.dynastyid === 0).map(IPersonAsINode)],
                edges: [...edges.filter(v => v.from.dynastyid === 0 && v.type === "child").map(IGenaLinkAsILink)]
            };
            setGraph({...curGraph});
            setGraphKey(graphKey+1);
        }
        // eslint-disable-next-line
    }, [nodes, edges])

    if (!nodes || !edges)
        return <h1>
            НАСРАНО
        </h1>

    const events = {
        select: function(event: any) {
            // eslint-disable-next-line
            var { nodes }: {nodes:Array<any>} = event;
            if(typeof nodes === typeof [] && nodes.length === 1)
                dispach({type:"SelectCharacter",payload:nodes[0]})
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
        </div>
    );
}

export default TreeDrawer;