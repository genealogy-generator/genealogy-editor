import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ITreeState } from "../storage/reducers/treeReducer";
import { RootState } from "../storage/store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;