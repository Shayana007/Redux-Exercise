import { createStore } from "redux";
import { MilkReducer } from "./MilkReducer";
export const MilkStore = createStore(MilkReducer);
