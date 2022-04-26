import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // vuexをvue全体で使用する宣言

export default new Vuex.Store({ 
    state: { 
      number: 2
    },
    // 複数定義しているものがあるとする
    getters: {
      doubleCount: state => state.number * 2,
      tripleCount: state => state.number * 3
    }
  })
