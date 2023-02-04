import axios from 'axios';
import { setIntercepters } from './common/interceptors';


function createInstance() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    })
}

function createInstanceWithIntercepter() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    });
    return setIntercepters(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithIntercepter();



