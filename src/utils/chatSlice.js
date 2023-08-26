import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./helper";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addmessage } = chatSlice.actions;
export default chatSlice.reducer;
