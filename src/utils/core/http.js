/* eslint-disable */
import axios from 'axios';
import cookie from './cookie.js'
// 默认配置
axios.defaults.timeout = 10000; // 超时
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 不同环境下的BASE_URL

// 请求拦截
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

// get请求
export async function get(url, params = {}) {
    try {
        let res = await axios.get(url, params);
        return new Promise((resolve, reject) => {
            resolve(res.data);
        })
    } catch (err) {
        console.log(err);
    }
}
const os = {
    windows: /Windows/ig.test(navigator.userAgent),
    macos: /Mac OS/ig.test(navigator.userAgent)
}

// post 请求
export async function post(url, params = {}) {
    try {
        let res = await axios.post(url, params);
        console.log(url)
        return new Promise((resolve) => {
            var data = res.body
            if (data.retcode === 0) {
                resolve(res.data);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

