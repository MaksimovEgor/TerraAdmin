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
import TestComponent from "./components/TestComponent";
import {TestComponent2} from "./components/TestComponent2";
import {Layout} from "./components/Layout";
import {Events} from "./components/Pages/Events";
import {Dobro} from "./components/Pages/Dobro";
import {Container} from "@material-ui/core";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Container>
                        <Route path="/dobro"><PermanentDrawerLeft /> </Route>
                        <Route path="/events"><EventsPageAlbum /> </Route>
                        <Route path="/test"><TestComponent /> </Route>
                        <Route path="/test2"><TestComponent2 /> </Route>
                        <Route path="/events-page"><Events /> </Route>
                        <Route path="/dobro-page"><Dobro /> </Route>
                    </Container>
                </Switch>
            </Layout>
        </Router>


    );
}

export default App;
