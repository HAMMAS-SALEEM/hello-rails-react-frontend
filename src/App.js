import { Routes, Route } from 'react-router-dom';
import './App.css';
import Post from './Components/Post';
// import Posts from './Components/Posts';
// import Message from './Components/Message';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Post />} />
    </Routes>
  );
}

export default App;
