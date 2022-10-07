import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState();
    // вот этот про этот useEffect не уверен, использовать при каждом ренедере
    // или только при первом рендере?
    // Сейчас я считаю, что в реальной жизни юзеры - это динамическая сущность,
    // поэтому нужно каждый раз свежие данные запрашивать
    useEffect(() => {
        api.users
            .fetchAll()
            .then((data) => setUsers(data));
    });
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };
    return (
        users && (
            <div>
                <Users
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                    users={users}
                />
            </div>
        )
    );
}

export default App;
