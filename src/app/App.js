import React from "react";
<<<<<<< HEAD
import { Route, Switch, Redirect } from "react-router-dom";

=======
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";

=======
import AuthProvider from "./hooks/useAuth";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
    return (
        <div>
            <AppLoader>
<<<<<<< HEAD
                <NavBar />
                <Switch>
                    <ProtectedRoute
                        path="/users/:userId?/:edit?"
                        component={Users}
                    />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
=======
                <AuthProvider>
                    <NavBar />
                    <Switch>
                        <ProtectedRoute
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/logout" component={LogOut} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </AuthProvider>
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
