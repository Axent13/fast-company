import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { getCurrentUserData } from "../../store/users";
const NavProfile = () => {
=======
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

function NavProfile() {
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
<<<<<<< HEAD

    if (!currentUser) return "loading";
=======
    if (!currentUser) return "Loading...";
>>>>>>> 87a6102e1ff76dc4e54732422b48e929fa46d48f
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <Link
                    to={`/users/${currentUser._id}`}
                    className="dropdown-item"
                >
                    Profile
                </Link>
                <Link to="/logout" className="dropdown-item">
                    Log Out
                </Link>
            </div>
        </div>
    );
};

export default NavProfile;
