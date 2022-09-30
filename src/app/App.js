import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  
  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => {
      return userId !== user._id;
    });
    setUsers(newUsers);
  }
  const handleToggleBookmark = (id) => {
    const newUsers = users.map((user) => {
      if (id === user._id) {
        user.bookmark = !user.bookmark;
      }

      return user;
    });
    setUsers(newUsers);
  }

  return (
    <div>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDelete} onToggleBookmark={handleToggleBookmark}/>
    </div>
  );
}

export default App;
