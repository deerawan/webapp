import { EVENTS_REQ } from '@state/networkTypes';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  details: {
    venue: {},
    sessions: [],
  },
  reqVerb: 'GET_LIST',
  future: [],
  past: [],
  all: [],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations: {
    [EVENTS_REQ.VERB]: mutations.requestVerb,
    [EVENTS_REQ.PENDING]: mutations.requestPending,
    [EVENTS_REQ.SUCCESS]: mutations.requestSuccess,
    [EVENTS_REQ.FAILURE]: mutations.requestFailed,
  },
  actions: {
    [EVENTS_REQ.START]: actions.makeRequest,
  },
};
