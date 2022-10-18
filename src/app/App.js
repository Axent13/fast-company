import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";
import User from "./components/user";

function App() {
    return <div>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" render={(props) => (<User {...props} />)} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Main} />
            </Switch>
        </div>;
}

export default App;
