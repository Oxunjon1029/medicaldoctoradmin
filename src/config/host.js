import axios from 'axios';
import { API_URL, SITE_LANG, TOKEN } from "../constants/constants";
import { getCookie } from "../Cookie/useCookies";

export const token = getCookie(TOKEN);

export let host = API_URL;

export let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-Type": "application/json; charset=utf-8",
  Authorization: token ? `Bearer ${token}` : "",
  Language: localStorage.getItem(SITE_LANG),
};

export let axiosInstance = axios.create({
  baseURL: `${host}/`,
  headers,
  timeout: 1000,
});