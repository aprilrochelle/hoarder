import axios from 'axios';
import constants from '../constants';

const getMyStuff = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuff.json?orderBy="uid"&equalTo="${uid}"`)
      .then((res) => {
        const myStuff = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            myStuff.push(res.data[fbKey]);
          });
        }
        resolve(myStuff);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getMyStuff };
