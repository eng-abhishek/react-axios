import logo from './logo.svg';
import './App.css';
import FetchApi from './Components/FetchApi'
import GetAxios from './Components/GetAxios';
import PostAxios from './Components/PostAxios';
import Curd from './Components/Crud';
import {Routes,Route} from 'react-router-dom'
import Read from "./Components/Read";
import Edit from './Components/Edit';

function App() {
  return (
    <div className="container">
      {/* <FetchApi/> */}
      {/* <GetAxios /> */}
      {/* <PostAxios /> */}
      {/* <Curd /> */}
     <Routes>
      {/* <Route path='' element={<Curd/>}>Curd</ Routes>
      <Route path='' element={<Read/>}> Read </ Route>
       */}
       <Route path='/' element={<Read/>}>Read</Route>
       <Route path='/create' element={<Curd/>}>Curd</Route>
       <Route path='/edit' element={<Edit/>}>Curd</Route>
     </Routes>
    </div>
  );
}

export default App;
