import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getfollowers() {
  const response = await api.get("/api/users/followers");
  return response.data;
}

export async function getfollowings() {
  const response = await api.get("/api/users/followings");
  return response.data;
}