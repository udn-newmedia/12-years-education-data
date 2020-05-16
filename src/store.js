import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSlideIndex: 0,
    cardAmount: 11,
    isCrucialFiguresInitial: true
  },
  mutations: {
    updatedCurrentSlideIndex(state, payload) {
      state.currentSlideIndex = payload;
    },
    updatedIsCrucialFiguresInitial(state, payload) {
      state.isCrucialFiguresInitial = payload;
    }
  },
  actions: {
    updatedCurrentSlideIndex(context, payload) {
      context.commit('updatedCurrentSlideIndex', payload);
    },
    updatedIsCrucialFiguresInitial(context, payload) {
      context.commit('updatedIsCrucialFiguresInitial', payload);
    }
  },
});
