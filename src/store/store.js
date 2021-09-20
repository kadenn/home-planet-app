import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },
  plugins: [createPersistedState()],
  actions: {
    loadPeople({ commit }) {
      for (let i = 1; i < 84; i++) {
        axios.get(`https://swapi.dev/api/people/${i}`).then(result => {
          let personData = result.data;
          personData.person_id = i;

          axios.get(personData.homeworld).then(result => {
            personData.planet_data = result.data;

            commit('ADD_PERSON', personData);
          }).catch(error => {
            throw new Error(`API ${error}`);
          });

        }).catch(error => {
          throw new Error(`API ${error}`);
        });
      }
    },
  },
  mutations: {
    ADD_PERSON(state, person) {
      const index = state.people.findIndex(d => d.person_id === person.person_id)
      if (index === -1)
        state.people.push(person);
      else
        state.people[index] = person
    }
  }
})

