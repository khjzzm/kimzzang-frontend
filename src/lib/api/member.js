import axios from 'axios';
import { apiServerDomain } from './config'

export const memberList = async () => await fetch(apiServerDomain+"/api/member/list");
export const insertMember = (member) => axios.post(process.env.REACT_APP_API_SERVER_IP+"/api/member/insert", JSON.stringify(member), {
    headers: { "Content-Type": "application/json;charset=UTF-8" }
})