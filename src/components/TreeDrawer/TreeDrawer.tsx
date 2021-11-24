import React from "react";
export interface ITreeDrawerProps {};

const TreeDrawer: React.FC<ITreeDrawerProps> = (props) => {
    return (
        <div>
            <canvas ></canvas>
        </div>
    );
}

export default TreeDrawer;