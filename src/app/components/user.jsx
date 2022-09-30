import React from "react";
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({ user, onDelete, onToggleBookmark }) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
          {user.qualities.map((qualitie, index) => (
              <Qualitie
                {...qualitie}
                key={index}
              />
          ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td>
        <BookMark
          status={user.bookmark}
          key={user._id}
          userId={user._id}
          onToggleBookmark={() => onToggleBookmark(user._id)}
        />
      </td>
      <td>
        <button
          onClick={() => (onDelete(user._id))}
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
