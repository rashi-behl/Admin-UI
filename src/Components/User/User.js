import { useRef } from "react";
import "./User.css";
import { BsFillTrashFill,BsPencilSquare } from "react-icons/bs";


const User = (props) => {
  const {
    user,
    handleIndividualSelect,
    handleSaveUser,
    handleEditUser,
    handleDeleteUser,
  } = props;

  const updatedName = useRef(null);
  const updatedEmail = useRef(null);
  const updatedRole = useRef(null);

  return (
    <tr key={user.id} className={user.selected ?"selected" : " "}>
      <td>
        {" "}
        <input 
        type="checkbox"
        id={`check-${user.id}`}
        data={`${user.selected}`}
        onChange={() => handleIndividualSelect(user.id)}
        checked={user.selected}
         />
      </td>
      <td>
      <input
          className={user.edit ? "editable" : "readOnly"}
          readOnly={!user.edit}
          type="text"
          ref={updatedName}
          name="name"
          defaultValue={user.name}
        ></input>
      </td>
      <td>
      <input
          className={user.edit ? "editable" : "readOnly"}
          readOnly={!user.edit}
          type="email"
          ref={updatedEmail}
          name="email"
          defaultValue={user.email}
        />
      </td>
      <td>
      <input
          className={user.edit ? "editable" : "readOnly"}
          readOnly={!user.edit}
          type="text"
          ref={updatedRole}
          name="role"
          defaultValue={user.role}
        />
      </td>
      <td className="icons">
      {user.edit ? (
          <i
            onClick={() => handleSaveUser(user.id, updatedName, updatedEmail, updatedRole)}
            className="fas fa-save"
          ></i>
        ) : (
          <BsPencilSquare onClick={() => handleEditUser(user.id)}/>
        
        )}
        <BsFillTrashFill onClick={() => handleDeleteUser(user.id)}/>
      
      </td>
    </tr>
  );
};

export default User;
