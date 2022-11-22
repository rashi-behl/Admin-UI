import React, { useState, useEffect, useRef } from "react";
import "./UserGrid.css";
import User from "../User/User";

const UserGrid = (props) => {
  const {
    users,
    page,
    setPage,
    handleSelectAll,
    selectAllRef,
    handleIndividualSelect,
    handleSaveUser,
    handleEditUser,
    handleDeleteUser,
  } = props;

  useEffect(() => {
    if (users.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [page, setPage, users.length]);

  if (users.length === 0) {
    return <h3>No Users Found</h3>;
  }

  let rowsToFill = [];
  for (let i = users.filter((user) => user.show).length; i < 10; i++) {
    rowsToFill.push(<tr key={i}></tr>);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              ref={selectAllRef}
              onChange={(e) => {
                handleSelectAll(e);
              }}
              name="selectAll"
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return user.show?(
            <User
            handleIndividualSelect={handleIndividualSelect}
            handleSaveUser={handleSaveUser}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            key={user.id}
            user={user}
          ></User>
          ):(
            ""
          )
          })}
        {rowsToFill}
      </tbody>
    </table>
  );
};

export default UserGrid;
