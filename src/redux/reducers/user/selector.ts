import { RootState } from "../../store";
import { UserInterface } from "../../../types";

export const selectAuthFlag = (state:RootState) =>{
    return state.user.authFlag;
}