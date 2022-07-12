import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessageAPI } from '../redux/message/message';

const Message = () => {
  const dispatch = useDispatch();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [file, setFile] = useState({});

  const sendNameToAPI = (data) => {
    fetch('http://localhost:4000/v1/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .catch((error) => error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('post[name]', e.target.name.value);
    data.append('post[email]', e.target.email.value);
    data.append('post[password]', e.target.password.value);
    data.append('post[password_confirmation]', e.target.password_confirmation.value);
    data.append('post[user_image]', e.target.file.files[0]);
    sendNameToAPI(data);
  };
  //
  // const handleInput = (e) => {
    // const input = e.target;
    // const inputValue = input.value;
    // if (input.name === 'name') {
  // setName(inputValue);
    // } else if (input.name === 'email') {
  // setEmail(inputValue);
    // } else if (input.name === 'password') {
  // setPassword(inputValue);
    // } else if (input.name === 'password_confirmation') {
  // setPasswordConfirmation(inputValue);
    // } else if (input.name === 'file') {
  // const formData = new FormData();
  // formData.append('file', input.files[0]);
  // setFile(input.files[0]);
  // console.log(formData);
    // }
  // };

  useEffect(() => {
    dispatch(getMessageAPI());
  }, []);
  const store = useSelector((store) => store.messageReducer);
  return (
    <div className="App">
      <span>
        New Person:
        {store.description}
      </span>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Type your name here" />
        <input type="email" name="email" placeholder="Type your email here" />
        <input type="password" name="password" placeholder="Type your password here" />
        <input type="password" name="password_confirmation" placeholder="Type your password here again" />
        <input type="file" name="file" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Message;
