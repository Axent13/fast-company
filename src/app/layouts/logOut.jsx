import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
<<<<<<< HEAD
const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("logout");
=======

const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
        dispatch(logOut());
    }, []);
    return <h1>Loading</h1>;
};

export default LogOut;
