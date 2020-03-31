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
