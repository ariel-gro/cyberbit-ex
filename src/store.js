import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    previews: [
      {
        x: 0, y: 0, w: 1, h: 2, i: '0', data: 'qqaa0',
      },
      {
        x: 1, y: 0, w: 1, h: 2, i: '1', data: 'qqaa1',
      },
      {
        x: 2, y: 0, w: 1, h: 2, i: '2', data: 'qqaa2',
      },
      {
        x: 0, y: 2, w: 1, h: 2, i: '3', data: 'qqaa3',
      },
      {
        x: 1, y: 2, w: 1, h: 2, i: '4', data: 'qqaa4',
      },
      {
        x: 2, y: 2, w: 1, h: 2, i: '5', data: 'qqaa5',
      },
    ],
    configurations: [
      [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'black',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'teal',
        },
      ], [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'black',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'green',
        },
      ], [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'aqua',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'green',
        },
      ], [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'black',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'green',
        },
      ], [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'black',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'green',
        },
      ], [
        {
          x: 0, y: 0, w: 2, h: 1, i: '0', backColor: 'red',
        },
        {
          x: 0, y: 1, w: 1, h: 2, i: '1', backColor: 'blue',
        },
        {
          x: 1, y: 1, w: 1, h: 2, i: '2', backColor: 'black',
        },
        {
          x: 0, y: 3, w: 2, h: 2, i: '3', backColor: 'yellow',
        },
        {
          x: 0, y: 4, w: 2, h: 1, i: '4', backColor: 'green',
        },
      ],
    ],
  },
  mutations: {
    updateBackColorAtIndex(state, payload) {
      const myState = state;
      myState.configurations[payload.confIndex][payload.cellIndex].backColor = payload.newColor;
    },
    setConfigurationAtIndex(state, payload) {
      const myState = state;
      myState.configurations[payload.index] = payload.conf;
    },
  },
  actions: {
    getPreviews() {
      // TODO - get from DB
      return this.state.previews;
    },
    getConfiguration({ commit }, index) {
      // TODO - get configuration from DB instead
      const conf = this.state.configurations[index];

      commit('setConfigurationAtIndex', { index, conf });

      return conf;
    },
    changeBackColor({ commit }, confIndex, cellIndex, newColor) {
      // TODO - save to DB
      commit('updateBackColorAtIndex', { confIndex, cellIndex, newColor });
    },
  },
  getters: {
    previews: state => state.previews,
  },
});
