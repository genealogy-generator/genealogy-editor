import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TreeActionTypes } from "../../storage/actions/treeAction";
import { ITreeNode } from "../../types/interfaces/ITreeNode";
export interface ITreeDrawerProps {
    width?:number;
    height?:number;
};
/*
const dateToYcord = (date:number,start:number,scale:number) =>{
    return (date - start) * scale;
}


const drawLine = (from:Point | null,to:Point | null,type:string,ctx: CanvasRenderingContext2D) => {
    if (! to || !from) return;
    ctx.beginPath()
    ctx.moveTo(...from);
    ctx.lineWidth = 3;
    ctx.lineTo(...to);
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()
    console.log(from,to);
    
}
*/

const TreeDrawer: React.FC<ITreeDrawerProps> = (props) => {
    const node    = useTypedSelector(state => state.tree?.node);
    const dispach = useDispatch();
    
    //const act : ITreeAction[] = []
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas : HTMLCanvasElement = canvasRef.current!;
        const ctx    = canvas.getContext('2d')!;
        
        //clear backgraund
        ctx.fillStyle = "#1e1e1e"
        ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
        
        if (!node) return;

        const drawNode = (node: ITreeNode, x: number, ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = "#0f0"
            if(node.type !== "root") ctx.fillRect(x,node.birth_date - 6,12,12);
            node.relations.forEach((value)=>drawNode(value.object,x,ctx));
            
        }
        
        drawNode(node,10,ctx);

    },[node])
    return (
        <div>
            <canvas ref={canvasRef} width={props.width} height={props.height} />
            <button onClick={()=>{
                dispach({
                    type:TreeActionTypes.CREATE_NODE,payload:{
                        object:{
                            birth_date:Math.round(Math.random()*Number(props.width)),
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