import { createSlice } from "@reduxjs/toolkit";
import { UserType, UserProfile } from "../../api/type";
import { setToken } from "../../../utils";

interface InitialStateProp {
  isLoading: boolean;
  user?: UserProfile;
  regType: UserType;
  loginUserType: UserType | undefined;
  auth: boolean;
  verifyUserToken: string | null;
  authToken: string | null;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    user: undefined,
    regType: localStorage.getItem("regType" || "user"),
    auth: localStorage.getItem("token") ? true : false,
    verifyUserToken: localStorage.getItem("verifyUserToken"),
    authToken: localStorage.getItem("token"),
    loginUserType: localStorage.getItem("loginUserType"),
  } as InitialStateProp,
  reducers: {
    getUserDetails(state, details) {
      state.user = details.payload;
    },
    loginUserSuccess(state, details) {
      setToken(details?.payload.token);
      state.auth = true;
      state.user = details?.payload?.user;
      state.authToken = details?.payload.token;
      localStorage.setItem("loginUserType", details.payload.user.account_type);
      state.loginUserType = details?.payload.user.account_type;
      localStorage.removeItem("verifyUserToken");
      localStorage.removeItem("regType");
    },
    logoutUser(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("loginUserType");
      state.auth = false;
      state.user = undefined;
      state.loginUserType = undefined;
      state.authToken = null;
    },
  },
});

const { reducer, actions } = authSlice;
export const { getUserDetails, loginUserSuccess, logoutUser } = actions;
export default reducer;
