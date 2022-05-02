import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';


export default function Delete() {
  
  const [user, setUser] = useContext(UserContext)
  const { id } = useParams();
  
  const deleteObj = (id) => {
    const parseId = parseFloat(id)
    const filteredUser = user.filter((user) => user.id !== parseId);
    setUser([...filteredUser])
  }
  
  return (
    <div>
      <h1>Are You Sure Want to Delete?</h1>
      <Link to={"/"}>
        <button>Back Home</button>{" "}
        <button onClick={()=>deleteObj(id)}>Delete</button>
      </Link>
    </div>
  )
}
