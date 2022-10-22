
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import List from './list/List';
import ProfileContainer from './profile/ProfileContainer';
import LoginContainer from './login/LoginContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />}/>
            <Route  path="/login" element={<LoginContainer/>}/>
            <Route  path="/profile" element={<ProfileContainer/>} />
            <Route  path="/list" element={<List />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
