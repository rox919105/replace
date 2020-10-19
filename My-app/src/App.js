import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, } from 'react-router-dom';
import Test from './Components/Test/Test';




const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/Profile' render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path='/Dialogs' render={() => <Dialogs
            store={props.store} />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Test' render={() => <Test state={props.state.testPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
