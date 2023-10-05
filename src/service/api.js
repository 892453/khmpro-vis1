import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:5000';
export function getdata (params) {
    return new Promise((resolve, reject) => {
        axios.get("/keyboardata", {
            params: params,
          }).then((response) => {
            // landing(url, params, response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
}
//获取鼠标点击坐标数据
export function getmousedata (params) {
  return new Promise((resolve, reject) => {
      axios.get("/mousedata", {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
//获取格式化后的鼠标点击坐标数据
export function getmouseformatdata (params) {
  return new Promise((resolve, reject) => {
      axios.get("/mouse_format_data", {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}

export function getmouse2 (params) {
  return new Promise((resolve, reject) => {
      axios.get("/mouse2", {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
//获取头部位置head-position数据
export function position (params) {
  return new Promise((resolve, reject) => {
      axios.get("/position", {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}
//获取头部姿态head-pose数据
export function pose (params) {
  return new Promise((resolve, reject) => {
      axios.get("/pose", {
          params: params,
        }).then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
}