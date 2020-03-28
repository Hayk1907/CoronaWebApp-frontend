/* eslint-disable prettier/prettier */
import axios from 'axios';

const url = 'https://covid-statistics-api.herokuapp.com';

export default class UserService {
  static async createUser(data) {
    return await axios.post(`${url}/user`, data);
  }

  static async getAllNearUsesr() {
    const { data } = await axios.get(`${url}/users`);
    return data;
  }

  static async getUserById(id) {
    const { data } = await axios.get(`${url}/users/${id}`);
    return data;
  }
}
