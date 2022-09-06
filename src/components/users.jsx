import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter(user => user._id !== userId));
  };

  const renderPhrase = (number) => {
    return number >= 2 && number <= 4 ?  "человека тусанут" : "человек тусанет";
  };

  return (
    <>
      {users.length <= 0 ?
        <span className='badge bg-danger'>Никто с тобой не тусанет</span>
        :
        <>
          <span className='badge bg-primary'>{users.length} {renderPhrase(users.length)} с тобой сегодня</span>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Имя</th>
                <th scope='col'>Качества</th>
                <th scope='col'>Профессия</th>
                <th scope='col'>Встретился, раз</th>
                <th scope='col'>Оценка</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return ( 
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.qualities.map(quality => {
                      return <span key={quality._id} className={`badge bg-${quality.color} mx-1`}>{quality.name}</span>
                    })}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate} / 5</td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(user._id)}>delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      }
    </>
  );
};

export default Users;
