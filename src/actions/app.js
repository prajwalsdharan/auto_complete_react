export const GET_AUTOCOMPLETE_DATA = 'GET_AUTOCOMPLETE_DATA';
export const GET_WRITE_STATUS = 'GET_WRITE_STATUS';

export function getAutoCompleteData(payload) {
    return {
      type: GET_AUTOCOMPLETE_DATA,
      payload: payload,
    };
}

export function getWriteStatus(payload) {
  return {
    type: GET_WRITE_STATUS,
    payload: payload,
  };
}