import { getTopics } from '@/service/api';

const TOPICS_SAVA = 'TOPICS_SAVA';
const SHOW_LOADING = 'SHOW_LOADING';
const TOPICS_REFRESH = 'TOPICS_REFRESH';

export function fetchTopics({ type = TOPICS_SAVA, page = 1 }) {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADING });
    getTopics({ page }).then((payload) => {
      if (type === TOPICS_REFRESH) {
        dispatch({ type: TOPICS_REFRESH, payload });
      } else {
        dispatch({ type: TOPICS_SAVA, payload, page });
      }
    });
  };
}


export function topics(state = {
  all: {
    data: [],
    page: 1,
    loading: false
  }
}, action) {
  switch (action.type) {
    case TOPICS_REFRESH:
      return {
        all: {
          data: action.payload,
          page: 1,
          loading: false
        }
      };
    case TOPICS_SAVA:
      return {
        all: {
          data: state.all.data.concat(action.payload),
          page: action.page,
          loading: false
        }
      };
    case SHOW_LOADING:
      return {
        all: {
          ...state.all,
          loading: true
        }
      };
    default:
      return state;
  }
}
