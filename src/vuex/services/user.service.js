import axios from 'axios';

const baseUrl = process.env.VUE_APP_BACK_API;

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
