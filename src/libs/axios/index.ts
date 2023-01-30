import axios from "axios";
import config from "@/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "@/constants/token";
import Token from "../Token";

export const customAxios = axios.create({
  baseURL: config.SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});
