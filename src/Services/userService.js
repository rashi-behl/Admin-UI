import axios from "axios";

const URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";


  
const getUsers = (setUsers) => {
  axios
  .get(URL)
  .then((response) => {
    setUsers(modifyUserList(response.data));
  });
};


const modifyUserList = (arr) => {
    return arr.map(user => {
        user.selected = false;
        user.edit = false;
        user.show = true;
        return user;
    })
}

export default getUsers;
