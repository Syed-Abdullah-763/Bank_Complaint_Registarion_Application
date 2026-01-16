import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const url = import.meta.env.VITE_API_URL + "/auth/login";
      const res = await axios.post(url, payload);

      return res.data;
    } catch (error) {
      //   alert(error.response.data.message);

      return rejectWithValue(error);
    }
  }
);
