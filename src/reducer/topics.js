import { getTopics } from '@/service/api';
import { ListView } from "antd-mobile";

const TOPICS_SAVA = 'TOPICS_SAVA';

function save(payload) {
  return {
    type: TOPICS_SAVA,
    payload
  };
}

export function fetchTopics() {
  return (dispatch) => {
    getTopics().then((data) => {
      dispatch(save(data));
    });
  };
}

export function topics(state = {
  all: {
    data: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    page: 1,
    loading: false
  }
}, action) {
  switch (action.type) {
    case TOPICS_SAVA:
      return {
        all: {
          data: state.all.data.cloneWithRows(action.payload),
          page: 1,
          loading: false
        }
      };
    default:
      return state;
  }
}
