import { BUY_MILK } from "./MilkTypes";
export const createBuyMilkAction = (quantity) => {
  return { type: BUY_MILK,
     payload: { quantity: quantity } };
};