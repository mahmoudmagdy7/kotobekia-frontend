import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
// get all the logged in user conversations
export const getUserConversations = createAsyncThunk("chat/getUserConversations", async () => {
  try {
    const { data } = await axios(config.bseUrl + "/v1/conversations/get", {
      headers: {
        token: Cookies.get("userToken"),
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
});

// get the clicked ConversationMessages

export const getConversationMessages = createAsyncThunk("chat/getConversationMessages", async (conversationId) => {
  try {
    const { data } = await axios(config.bseUrl + `/v1/messages/get/${conversationId}`, {
      headers: {
        token: Cookies.get("userToken"),
      },
    });

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// Send new message

export const sendNewMessage = createAsyncThunk("chat/sendNewMessage", async (conversation) => {
  console.log(conversation);
  try {
    const { data } = await axios.post(
      config.bseUrl + `/v1/messages/send-message`,
      { convo_id: conversation.convId, message: conversation.msg },
      {
        headers: {
          "Content-Type": "application/json",
          token: Cookies.get("userToken"),
        },
      }
    );

    console.log(data.message);

    return data;
  } catch (err) {
    console.log(err);
  }
});

const chatSlice = createSlice({
  name: "chat", // must be unique in the slice
  initialState: {
    activeUser: null,
    userConversationsCount: 5,
    userConversations: null,
    activeConversation: [],
    lastMessage: "",
  },
  reducers: {
    increase: function (state) {
      state.userConversationsCount++;
    },
    setActiveUser: function (state, action) {
      state.activeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserConversations.fulfilled, (state, action) => {
      state.userConversations = action.payload;
    });
    builder.addCase(getConversationMessages.fulfilled, (state, action) => {
      state.activeConversation = action.payload;
    });
    builder.addCase(sendNewMessage.fulfilled, (state, action) => {
      state.lastMessage = action.payload;
      console.log(state.lastMessage);
      state.activeConversation = [...state.activeConversation, action.payload];
      console.log(state.activeConversation);
    });
  },
});

export const { increase, setActiveUser } = chatSlice.actions;
export default chatSlice.reducer;
