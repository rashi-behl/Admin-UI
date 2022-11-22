import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import UserGrid from "./Components/UserGrid/UserGrid";
import getUsers from "./Services/userService";
import { searchFunctionality } from "./HelperFunctions/searchFunctionality";
import Pagination from "./Components/Pagination/Pagination";


function App() {
  const [users, setUsers] = useState([]);
  const selectAllRef = useRef(null);
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  const index = (page - 1) * 10;

  const handleUserSearch = (e) => {
    setPage(1);
    setUsers(searchFunctionality(e.target.value, users));
  };

  const handleEditUser = (id) => {
    let userList = users;
    const index = userList.findIndex((user) => user.id === id);
    userList[index].edit = true;
    setUsers(userList);
    setUpdate((prevState) => !prevState);
  };

  const handleDeleteUser = (id) => {
    let userList = users.filter((user) => user.id !== id);
    setUsers(userList);
    setUpdate((prevState) => !prevState);
  };

  const handleSaveUser = (id, updatedName, updatedEmail, updatedRole) => {
    let userList = users;
    const index = userList.findIndex((user) => user.id === id);
    userList[index].name = updatedName.current.value;
    userList[index].email = updatedEmail.current.value;
    userList[index].role = updatedRole.current.value;
    userList[index].edit = false;
    setUsers(userList);
    setUpdate((prevState) => !prevState);
  };

  const handleIndividualSelect = (id) => {
    let userList = users;
    const index = userList.findIndex((user) => user.id === id);
    userList[index].selected = !userList[index].selected;
    setUsers(userList);
    setUpdate((prevState) => !prevState);
  };

  const handleSelectAll = (e) => {
    const listedUserIds = users
      .filter((user) => user.show)
      .slice(index, index + 10)
      .map((user) => user.id);

    let userList = users.map((user) => {
      if (listedUserIds.includes(user.id)) {
        user.selected = e.target.checked;
        return user;
      }
      return user;
    });

    setUsers(userList);
    setUpdate(!update);
  };

  const handleSelectedDelete = () => {
    if (window.confirm("The selected user will delete")) {
      setUsers((prevState) => prevState.filter((user) => !user.selected));
      selectAllRef.current.checked = false;
    }
  };

  return (
    <div className="App">
      <input
        className="searchBar"
        type="text"
        placeholder="Search by name, email or role"
        onChange={handleUserSearch}
      ></input>

      <UserGrid
        page={page}
        setPage={setPage}
        handleSelectAll={handleSelectAll}
        selectAllRef={selectAllRef}
        handleIndividualSelect={handleIndividualSelect}
        handleSaveUser={handleSaveUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
        users={users.filter((user) => user.show).slice(index, index + 10)}
      />

      <Pagination 
         numOfUsers={users.filter((user) => user.show).length}
         page={page}
         setPage={setPage}
         handleSelectedDelete={handleSelectedDelete}
      />
    </div>
  );
}

export default App;
