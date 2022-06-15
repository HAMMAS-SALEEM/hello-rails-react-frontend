import axios from 'axios';

const GET_MESSAGE_API = 'messageReducer/GET_MESSAGE_API';

const initialState = [];

const getMessage = (payload) => ({
  type: GET_MESSAGE_API,
  payload,
});

// const getMessageAPI = () => (dispatch) => {
//   fetch('http://localhost:4000/v1/messages')
//   .then(res=>res.json())
//   .then(json=>dispatch(getMessage(json)))
// }

const getMessageAPI = () => (dispatch) => {
  const response = axios.get('http://localhost:4000/v1/messages');
  const res = response.data;
  dispatch(getMessage(res));
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_API:
      return action.payload;
    default:
      return state;
  }
};

export default messageReducer;
export { getMessageAPI };
