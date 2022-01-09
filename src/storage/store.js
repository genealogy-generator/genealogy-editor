"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var treeDefaultReducer_1 = require("./reducers/treeDefaultReducer");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        //tree:treeReducer
        tree: treeDefaultReducer_1.treeDefaultReducer
    }
});
