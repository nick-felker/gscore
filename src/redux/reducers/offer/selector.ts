import { RootState } from "../../store";
import { OfferInterface } from "../../../types";


export const SelectOfferObj = (state:RootState) =>{
    return state.offer;
}