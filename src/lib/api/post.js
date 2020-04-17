import axios from 'axios';
import { apiServerDomain } from './config'

axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8";

export const postsList = async () => await axios.get(apiServerDomain+"/api/list");
export const insertPost = (posts) =>  axios.post(apiServerDomain+"/api/insert", JSON.stringify(posts));