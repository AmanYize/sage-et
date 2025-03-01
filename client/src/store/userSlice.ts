// store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  coins: number;
  inventory: { id: string; name: string; type: string }[];
  equippedItems: { [key: string]: string }; // e.g., { avatar: "avatar1", theme: "dark" }
}

const initialState: UserState = {
  coins: 100, // Starting coins
  inventory: [],
  equippedItems: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCoins(state, action: PayloadAction<number>) {
      state.coins += action.payload;
    },
    buyItem(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const shopItems = [
        { id: "item1", name: "Cool Avatar", price: 50, type: "avatar" },
        { id: "item2", name: "Dark Theme", price: 100, type: "theme" },
        { id: "item3", name: "Extra Hint", price: 30, type: "powerup" },
      ];
      const item = shopItems.find((i) => i.id === itemId);
      if (item && state.coins >= item.price) {
        state.coins -= item.price;
        state.inventory.push(item);
      }
    },
    equipItem(
      state,
      action: PayloadAction<{ itemId: string; itemType: string }>
    ) {
      const { itemId, itemType } = action.payload;
      state.equippedItems[itemType] = itemId;
    },
  },
});

export const { addCoins, buyItem, equipItem } = userSlice.actions;
export default userSlice.reducer;
