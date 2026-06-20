import * as SecureStore from "expo-secure-store";
import { RequestAPI } from "../hooks/request-api";

const API_URL = process.env.EXPO_PUBLIC_BACKEND_URI;

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("accessToken");
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

const GET_ALL_BOOK = async () => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  };
  return RequestAPI("GET", `${API_URL}/api/books`, HEADERS);
};

const CREATE_BOOK = async (payload) => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "multipart/form-data",
  };
  return RequestAPI("POST", `${API_URL}/api/books`, HEADERS, payload);
};

const GET_BOOK_BY_ID = async (book_id) => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  };
  return RequestAPI("GET", `${API_URL}/api/books/${book_id}`, HEADERS);
};

const UPDATE_BOOK = async (book_id, payload) => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "multipart/form-data",
  };
  return RequestAPI("PUT", `${API_URL}/api/books/${book_id}`, HEADERS, payload);
};

const DELETE_BOOK = async (book_id) => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  };
  return RequestAPI("DELETE", `${API_URL}/api/books/${book_id}`, HEADERS);
};

const GET_EXPLORER_BOOK = async () => {
  const TOKEN = await getToken();
  const HEADERS = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  };
  return RequestAPI("GET", `${API_URL}/api/books/explorers`, HEADERS);
};

export {
  CREATE_BOOK,
  DELETE_BOOK,
  GET_ALL_BOOK,
  GET_BOOK_BY_ID,
  GET_EXPLORER_BOOK,
  UPDATE_BOOK
};

