import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
    return <div>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" render={(props) => (<Users {...props} />)} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>;
}

export default App;
