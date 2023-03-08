import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../types/storeTypes";

export const useTypedDispatch = () => useDispatch<AppThunkDispatch>();