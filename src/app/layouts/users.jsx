import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
const Users = () => {
    const params = useParams();
    const { userId, action } = params;
    return (
        <>
            {userId ? (
                action === "edit" ? (
                    <EditUserPage userId={userId} />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
