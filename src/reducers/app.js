import { GET_AUTOCOMPLETE_DATA, GET_WRITE_STATUS} from '../actions/app';

const initialState = {
  autoCompleteData: [],
  writeStatus: null
};

export default function runtime(state = initialState, action) {
    switch (action.type) {
      case GET_AUTOCOMPLETE_DATA:
        return Object.assign({}, state, {
            autoCompleteData: action.payload
        });

      case GET_WRITE_STATUS:
          return Object.assign({}, state, {
            writeStatus: action.payload
          });

      default:
        return state;
  }
}
