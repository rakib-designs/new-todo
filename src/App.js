import { Route, Routes } from "react-router-dom";
import './App.css';
import CreateUser from "./components/CreateUser";
import Delete from "./components/Delete";
import Edit from './components/Edit';
import Home from './components/Home';
import Read from './components/Read';
import { UserProvider } from './userContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/read/:id" element={ <Read/> }/>
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={ <Home/> }/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
