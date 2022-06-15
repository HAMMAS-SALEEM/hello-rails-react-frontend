import axios from 'axios';

const GET_MESSAGE_API = 'messageReducer/GET_MESSAGE_API';

const initialState = [];

const getMessage = (payload) => ({
  type: GET_MESSAGE_API,
  payload,
});

const getMessageAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:4000/v1/messages');
  const res = await response.data;
  dispatch(getMessage(res));
};

// const getMessageAPI = () => async (dispatch) => {
//   fetch('http://localhost:4000/v1/messages')
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
//   dispatch(getMessage(data));
// });
// };

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
