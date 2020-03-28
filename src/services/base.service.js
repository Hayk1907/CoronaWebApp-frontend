import axios from 'axios';

const baseUrl = 'https://covid-statistics-api.herokuapp.com';
const gmapUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng';
const key = 'AIzaSyCV7Rtf2dRYulqFXiwg1cbIWLiweYJVdWo';

export default class UserService {
  static async createUser(data) {
    return await axios.post(`${baseUrl}/user`, data);
  }

  static async getAllNearUsesr() {
    const { data } = await axios.get(`${baseUrl}/users`);
    return data;
  }

  static async getUserById(id) {
    const { data } = await axios.get(`${baseUrl}/users/${id}`);
    return data;
  }
  static async getLocation(lat, long) {
    const { data } = await axios.get(`${gmapUrl}=${lat},${long}&key=${key}`);
    return data;
  }
}
