import axios from "axios";
import {
  setActiveUser,
  removeActiveUser,
  setUsers,
  setServiceUser,
  setAllUsers,
} from "../slices/usersSlice";

const token = localStorage.getItem("token");

export const activeUsers = (payload) => (dispatch) => {
  try {
    return dispatch(setActiveUser(payload));
  } catch (e) {
    console.log(e.message || e);
  }
};

export const removeUsers = () => (dispatch) => {
  try {
    return dispatch(removeActiveUser());
  } catch (e) {
    console.log(e.message || e);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://simpleservice-w2vt.onrender.com/users"
    );
    return dispatch(setUsers(response.data));
  } catch (e) {
    console.log(e.message || e);
  }
};

export const getServiceUser = (userId, token) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-w2vt.onrender.com/user/${userId}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return dispatch(setServiceUser(response.data));
  } catch (e) {
    console.log(e.message || e);
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://simpleservice-w2vt.onrender.com/admin/users`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return dispatch(setAllUsers(response.data));
  } catch (e) {
    console.log(e.message || e);
  }
};

//non redux actions

//POST REQUEST
export const createdUser = (username, name, token, profilepic) => {
  axios.post(
    "https://simpleservice-w2vt.onrender.com/users",
    { username, name, profilepic },
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
};

//LOGIN REQUEST
export const userLogin = async (token) => {
  try {
    const userResponseLogin = await axios.get(
      "https://simpleservice-w2vt.onrender.com/login",
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    const { message, user } = userResponseLogin.data;
    if (message !== "User succesfully logged in" && user) {
      await axios.post("https://simpleservice-w2vt.onrender.com/alta", {
        name: user.name,
        email: user.email,
      });
    }
  } catch (error) {
    console.log("userLogin error:", error.message);
  }
};

export function deleteUser() {
  //esta función se esta importando en ViewServices pero no existe
}
