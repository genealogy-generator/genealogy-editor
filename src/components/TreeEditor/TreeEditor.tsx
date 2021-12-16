import React from "react";
import TreeDrawer from "../TreeDrawer/TreeDrawer";
export interface ITreeEditorProps {
    width?:number;
    height?:number;
};

const TreeEditor: React.FC<ITreeEditorProps> = (props) => {
    return (
        <div><TreeDrawer {...props}></TreeDrawer></div>
    );
}

export default TreeEditor;