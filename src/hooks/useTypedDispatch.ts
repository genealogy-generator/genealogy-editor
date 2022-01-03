import { useDispatch } from "react-redux";
import { AppDispatch } from "../storage/store";
export const useTypedDispatch = () => useDispatch<AppDispatch>();