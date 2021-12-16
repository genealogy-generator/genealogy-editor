import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
export interface ITreeDrawerProps {};

const TreeDrawer: React.FC<ITreeDrawerProps> = (props) => {
    const dispatch = useDispatch()
    const links    = useTypedSelector(state => state.tree?.links);
    const nodes    = useTypedSelector(state => state.tree?.nodes);
    return (
        <div>
            <canvas></canvas>
        </div>
    );
}

export default TreeDrawer;