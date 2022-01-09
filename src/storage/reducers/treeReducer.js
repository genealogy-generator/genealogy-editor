"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.treeReducer = void 0;
var treeAction_1 = require("../actions/treeAction");
var TimelineDate_1 = require("../../types/TimelineDate");
/*
    Будет type nodes
*/
var treeDefaultState = {
    nodes: new Map([[0, {
                relations: [],
                type: "character",
                name: "n",
                surname: "s",
                patronymic: "p",
                birth: new TimelineDate_1["default"](0, 0, 0, 0, 0, 0),
                death: null
            }],
        [1, {
                relations: [],
                type: "character",
                name: "n1",
                surname: "s1",
                patronymic: "p1",
                birth: new TimelineDate_1["default"](1, 0, 0, 1, 0, 0),
                death: null
            }]
    ]),
    edges: new Map([[0, 1]])
};
var treeReducer = function (state, action) {
    if (state === void 0) { state = treeDefaultState; }
    switch (action.type) {
        case treeAction_1.TreeActionTypes.CREATE_LINK: return state; //return {...state}
        case treeAction_1.TreeActionTypes.CREATE_NODE:
            if (!action.payload)
                return state;
            return __assign(__assign({}, state), { nodes: __assign({}, state.nodes), edges: __assign({}, state.edges) });
        case treeAction_1.TreeActionTypes.REMOVE_LINK: return state;
        case treeAction_1.TreeActionTypes.REMOVE_NODE: return state; //return {...state, nodes: [...state.nodes.filter(val => val == action.payload)]}
        default: return state;
    }
};
exports.treeReducer = treeReducer;
