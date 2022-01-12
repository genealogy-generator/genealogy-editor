import {cat} from "../components/TreeDrawer/cat";

export const options = {
    layout: {
        hierarchical: {
            direction: 'UD',
            sortMethod: 'directed',
            nodeSpacing: 100
        }
    },
    edges: {
        color: "#444444",
        arrows: {
            to: false,
        }

    },
    nodes: {
        shape: "circularImage",
        borderWidth: 1,
        color: {
            border: "#000000",
        },
        font: {
            size: 16,
            strokeWidth: 1.5
        }
    },
    height: "1163px", //image height
    width: "100%",
};