import React from "react";
import User from './user';

const Users = ({ users, onDelete, onToggleBookmark, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map(user => <User 
                                  user={user}
                                  key={user._id}
                                  onDelete={() => (onDelete(user._id))}
                                  onToggleBookmark={() => (onToggleBookmark(user._id))}
                               />)}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Users;
