import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import Home from './components/HomePage';
import ReadUsers from "./components/ReadUsers";
import CreateUser from './components/CreateUser';
import RetrieveUser from './components/RetrieveUser'
import UpdateUser from './components/UpdateUser';


const App = ()=> {
  return (
    <Container>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/users" Component={ReadUsers} />
        <Route path="/add" Component={CreateUser} />
        <Route path="/users/:userId" Component={RetrieveUser} />
        <Route path='/update/:userId' Component={UpdateUser} />
      </Routes>
    </BrowserRouter>
    </Container>

  );
}

export default App