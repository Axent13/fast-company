import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../hooks/useAuth";
function ProtectedRoute({ component: Component, children, ...rest }) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!currentUser) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                } else if (props.location.pathname.slice(-5) === "/edit") {
                    const userIdRegexp =
                        props.location.pathname.match(/\/users\/(.+).edit$/);
                    const userId = userIdRegexp ? userIdRegexp[1] : null;
                    if (currentUser._id === userId) {
                        return Component ? <Component {...props} /> : children;
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: `/users/${currentUser._id}/edit/`,
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
}
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRoute;
