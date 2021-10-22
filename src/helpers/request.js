import axios from 'axios';
import { isPlainObject, assignIn } from 'lodash';

const config = {
  // 服務終端
  baseURL: '',
  // 跨域請求挾帶 cookies
  withCredentials: true,
  // 請求回應超時
  timeout: 30000,
  // 自定義抬頭
  headers: {},
  // 發出請求前的 callback
  transformRequest: [],
};

export const httpRequset = (options = {}) => {
  return axios.create(assignIn({}, config, isPlainObject(options) && options));
};
