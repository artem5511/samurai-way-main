import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes,  Route, Navigate, NavLink} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./Redux/state";
import {Error404} from './components/Error404';

type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState();

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs state={state.dialogsPage}/>}/>
                        {/*<Route path={'/profile'} element={ () => (<Profile*/}
                        {/*    profilePage={state.profilePage}*/}
                        {/*    addPost={props.store.addPost.bind(props.store)}*/}
                        {/*    updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>)}*/}
                        {/*/>*/}
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'*'} element={<Error404/>}/>
                        <Route path={'/profile'} element={<Profile profilePage={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
