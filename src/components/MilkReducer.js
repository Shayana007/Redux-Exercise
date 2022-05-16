import { BUY_MILK } from "./MilkTypes";
export const initialState = {
  numOfMilk: 20,
};
export const MilkReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...currentState,
        numOfMilk: currentState.numOfMilk - action.payload.quantity,
      };
    default:
      return currentState;
  }
};