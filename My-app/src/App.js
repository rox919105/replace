import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, } from 'react-router-dom';
import Test from './Components/Test/Test';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';




const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/Profile' render={() => <ProfileContainer />} />
          <Route path='/Dialogs' render={() => <DialogsContainer  />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Users' render={() => <UsersContainer  />} />
          <Route path='/Test' render={() => <Test  />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
