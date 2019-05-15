import axios from "axios";
let BaseURL = "http://localhost:81/GDK/gdkinventory/src/api/product/";

export function PostData(type, userData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BaseURL}/${type}.php?id=${userData.userid}`)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const getData = type => {
  return new Promise(resolve => {
    axios
      .get(`${BaseURL}/${type}.php`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error(error);
      });
  });
};

export function getItemListData(type, userData) {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BaseURL}/${type}.php?catid=${userData}`)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default { getData };
