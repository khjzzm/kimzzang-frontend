import axios from 'axios';
import { apiServerDomain } from './config'

axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8";

export const sendMail = (posts) =>  axios.post(apiServerDomain+"/api/send-mail", JSON.stringify(posts));