import './App.css';
import React from "react";
import EventsPageAlbum from "./components/EventsPageAlbum";
import PermanentDrawerLeft from "./components/DrawerPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/dobro"><PermanentDrawerLeft /> </Route>
                <Route path="/events"><EventsPageAlbum /> </Route>
            </Switch>
        </Router>


    );
}

export default App;
