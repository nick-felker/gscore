import { RootState } from "../../store";
import { UserInterface } from "../../../types";

export const selectAuthFlag = (state:RootState) => state.user.authFlag;

export const selectUsername = (state:RootState)=> state.user.username;
export const selectShowUsernameFlag = (state:RootState) => state.user.showUsernameFlag;