import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import UserService from '../services/base.service';

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
    SET_LOCATION(state, lat, long) {
      state.currentLocation.lat = lat;
      state.currentLocation.long = long;
    },
  },
  actions: {
    addCurrentUser({ commit }, user) {
      //TODO: validate user
      UserService.createUser(user)
        .then(res => {
          localStorage.setItem('userId', res.headers.user);
          commit('SET_CURRENT_USER', res.data);
          commit('SET_USER_ID', res.headers.user);
        })
        .catch(e => console.log(e, 1));
    },
    getUserById({ commit }) {
      const id = localStorage.getItem('userId');
      if (!id) return;
      UserService.getUserById(id)
        .then(user => {
          commit('SET_CURRENT_USER', user);
          commit('SET_USER_ID', id);
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
    setLoc({ commit }, lat, long) {
      commit('SET_LOCATION', lat, long);
    },
  },
  getters: {},
});
