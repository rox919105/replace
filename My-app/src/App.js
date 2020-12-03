import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, } from 'react-router-dom';
import Test from './Components/Test/Test';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login'





const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer  />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer  />} />
          <Route path='/test' render={() => <Test  />} />
          <Route path='/login' render={() => <Login  />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
