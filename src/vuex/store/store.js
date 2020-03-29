import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import io from 'socket.io-client';

const baseUrl = 'https://covid-statistics-api.herokuapp.com';

import UserService from '../services/user.service';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUser: {},
    userId: null,
    currentLocation: {
      lat: null,
      long: null,
    },
    users: [],
    socket: io(baseUrl),
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      user.date = moment(user.data).format('LL');
      state.currentUser = user;
    },
    SET_USER_ID(state, id) {
      state.userId = id;
    },
    SET_NEAR_USERS(state, users) {
      state.users = users.map(user => ({
        ...user,
        date: moment(user.data).format('LL'),
      }));
    },
    SET_LOCATION(state, [lat, long]) {
      state.currentLocation.lat = lat;
      state.currentLocation.long = long;
    },
    ADD_USER(state, user) {
      user.date = moment(user.data).format('LL');
      state.users.push(user);
    },
  },
  actions: {
    addCurrentUser({ commit }, user) {
      //TODO: validate user
      const person = {
        ...user,
        lat: this.state.currentLocation.lat,
        long: this.state.currentLocation.long,
      };

      UserService.createUser(person)
        .then(res => {
          this.state.socket.emit('CREATE_USER', res.data);
          localStorage.setItem('userId', res.headers.userid);
          commit('SET_CURRENT_USER', res.data);
          commit('SET_USER_ID', res.headers.userid);
        })
        .catch(e => console.log(e, 1));
    },
    getUserById({ commit }) {
      const id = this.state.userId;
      if (!id) return;
      UserService.getUserById(id)
        .then(user => {
          commit('SET_CURRENT_USER', user);
        })
        .catch(e => console.log(e, 2));
    },
    getNearUsesr({ commit }) {
      UserService.getAllNearUsesr()
        .then(users => {
          commit('SET_NEAR_USERS', users);
        })
        .catch(e => console.log(e, 3));
    },
    setLoc({ commit }, [lat, long]) {
      commit('SET_LOCATION', [lat, long]);
    },
    setUserId({ commit }) {
      const id = localStorage.getItem('userId');
      commit('SET_USER_ID', id);
    },
    addUser({ commit }, user) {
      commit('ADD_USER', user);
    },
  },
});
