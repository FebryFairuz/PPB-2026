import * as SecureStore from "expo-secure-store";
import { RequestAPI } from "../hooks/request-api";

const API_URL = process.env.EXPO_PUBLIC_BACKEND_URI || "http://localhost:3000";

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("accessToken");
    if (!token) {
      throw new Error("No authentication token found");
    }
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    throw error;
  }
};

const createHeaders = async (contentType = "application/json") => {
  const TOKEN = await getToken();
  return {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": contentType,
  };
};

const LOG_IN = async (payload) => {
  try {
    const HEADERS = {
      "Content-Type": "application/json",
    };
    return await RequestAPI(
      "POST",
      `${API_URL}/api/users/login`,
      HEADERS,
      payload,
      true,
    );
  } catch (error) {
    console.error("Error in LOG_IN:", error);
    return { success: false, message: error.message };
  }
};

const GET_ALL_USER = async () => {
  try {
    const HEADERS = await createHeaders();
    return await RequestAPI("GET", `${API_URL}/api/users`, HEADERS);
  } catch (error) {
    console.error("Error in GET_ALL_USER:", error);
    return { success: false, message: error.message };
  }
};

const CREATE_USER = async (payload) => {
  try {
    const HEADERS = await createHeaders("multipart/form-data");
    return await RequestAPI("POST", `${API_URL}/api/users`, HEADERS, payload);
  } catch (error) {
    console.error("Error in CREATE_USER:", error);
    return { success: false, message: error.message };
  }
};

const GET_USER_BY_ID = async (user_id) => {
  try {
    const HEADERS = await createHeaders();
    return await RequestAPI("GET", `${API_URL}/api/users/${user_id}`, HEADERS);
  } catch (error) {
    console.error("Error in GET_USER_BY_ID:", error);
    return { success: false, message: error.message };
  }
};

const UPDATE_USER = async (user_id, payload) => {
  try {
    const HEADERS = await createHeaders("multipart/form-data");
    return await RequestAPI(
      "PUT",
      `${API_URL}/api/users/${user_id}`,
      HEADERS,
      payload,
    );
  } catch (error) {
    console.error("Error in UPDATE_USER:", error);
    return { success: false, message: error.message };
  }
};

const DELETE_USER = async (user_id) => {
  try {
    const HEADERS = await createHeaders();
    return await RequestAPI(
      "DELETE",
      `${API_URL}/api/users/${user_id}`,
      HEADERS,
    );
  } catch (error) {
    console.error("Error in DELETE_USER:", error);
    return { success: false, message: error.message };
  }
};

export {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USER,
  GET_USER_BY_ID,
  LOG_IN,
  UPDATE_USER
};

