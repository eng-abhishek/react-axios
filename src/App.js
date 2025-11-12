import logo from './logo.svg';
import './App.css';
import FetchApi from './Components/FetchApi'
import GetAxios from './Components/GetAxios';
import PostAxios from './Components/PostAxios';

function App() {
  return (
    <div className="App">
      {/* <FetchApi/> */}
      {/* <GetAxios /> */}
      <PostAxios />
    </div>
  );
}

export default App;
