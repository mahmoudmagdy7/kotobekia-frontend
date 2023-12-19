import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";
import Cookies from "js-cookie";
// get all the logged in user conversations
export const getUserConversations = createAsyncThunk("chat/getUserConversations", async () => {
  try {
    const { data } = await axios(config.bseUrl + "/api/v1/conversations/get", {
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
    const { data } = await axios(config.bseUrl + `/api/v1/messages/get/${conversationId}`, {
      headers: {
        token: Cookies.get("userToken"),
      },
    });

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
      config.bseUrl + `/api/v1/messages/send-message`,
      { convo_id: conversation.convId, message: conversation.msg },
      {
        headers: {
          "Content-Type": "application/json",
          token: Cookies.get("userToken"),
        },
      }
    );

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
    onlineUsers: [],
    loadingConversations: false,
    loadingConversationMessages: false,
  },
  reducers: {
    setActiveUser(state, action) {
      state.activeUser = action.payload;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
    receiveMessage(state, action) {
      console.log("receive------------");
      state.activeConversation = [...state.activeConversation, action.payload];
    },
  },

  extraReducers: (builder) => {
    /* get  user conversations function cases */
    builder.addCase(getUserConversations.pending, (state) => {
      state.loadingConversations = true;
    });
    builder.addCase(getUserConversations.fulfilled, (state, action) => {
      state.loadingConversations = false;

      state.userConversations = action.payload;
    });

    /* get  user messages function cases */

    builder.addCase(getConversationMessages.pending, (state) => {
      state.loadingConversationMessages = true;
    });
    builder.addCase(getConversationMessages.fulfilled, (state, action) => {
      state.loadingConversationMessages = false;

      state.activeConversation = action.payload;
    });
    /* get  send message function cases */

    builder.addCase(sendNewMessage.fulfilled, (state, action) => {
      state.lastMessage = action.payload;
      state.activeConversation = [...state.activeConversation, action.payload];
    });
  },
});

export const { receiveMessage, setActiveUser, setOnlineUsers } = chatSlice.actions;
export default chatSlice.reducer;
