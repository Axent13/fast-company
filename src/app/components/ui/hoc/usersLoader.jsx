<<<<<<< HEAD
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsersList } from "../../../store/users";
=======
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadUsersList } from "../../../store/users";
import { useEffect } from "react";
import PropTypes from "prop-types";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f

const UsersLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus());
    const dispatch = useDispatch();
<<<<<<< HEAD
=======

>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    useEffect(() => {
        if (!dataStatus) dispatch(loadUsersList());
    }, []);
    if (!dataStatus) return "Loading";
    return children;
};

UsersLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
<<<<<<< HEAD
=======

>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
export default UsersLoader;
