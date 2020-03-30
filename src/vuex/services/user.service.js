import axios from 'axios';

const baseUrl = 'https://covid-statistics-api.herokuapp.com';

export default class UserService {
  static async createUser(data) {
    return await axios.post(`${baseUrl}/user`, data);
  }

  static async getAllNearUsesr(lat, long) {
    const { data } = await axios.get(`${baseUrl}/users`, {
      params: { lat, long },
    });
    return data;
  }

  static async getUserById(id) {
    const { data } = await axios.get(`${baseUrl}/users/${id}`);
    return data;
  }
}


//"start:prod": "babel-node server.js"
// const dotenv = require('dotenv');
// const fs = require('fs');
// const path = require('path');

// module.exports = env => {
//   const basePath = path.join(__dirname, '.env');
//   const envPath = `${basePath}.${env.NODE_ENV}`;
//   const finalPath = fs.existsSync(envPath) ? envPath : basePath;

//   const { parsed: fileEnv } = dotenv.config({ path: finalPath });

//   return Object.keys(fileEnv).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
//     return prev;
//   }, {});
// };