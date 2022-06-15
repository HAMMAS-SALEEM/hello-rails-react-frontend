import { Routes, Route } from 'react-router-dom';
import './App.css';
import Message from './Components/Message';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Message />} />
    </Routes>
  );
}

export default App;
