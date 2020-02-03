import axios from 'axios';
import { apiServerDomain } from './config'


export const postsList = async () => await fetch(apiServerDomain+"/api/list");
export const insertPost = (posts) =>  axios.post(apiServerDomain+"/api/insert", JSON.stringify(posts), {
    headers: { "Content-Type": "application/json;charset=UTF-8" }
  })