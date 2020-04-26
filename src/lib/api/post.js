import axios from 'axios';
import { apiServerDomain } from './config'

axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8";

export const postsList = async () => await axios.get(apiServerDomain+"/api/list");
export const postCnt = () => axios.get(apiServerDomain+"/api/list/cnt");
export const insertPost = (posts) =>  axios.post(apiServerDomain+"/api/insert", JSON.stringify(posts));