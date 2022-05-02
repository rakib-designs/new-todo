import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';

export default function Read() {

     const { id } = useParams();
     const [user] = useContext(UserContext);

     const parseId = parseFloat(id)
     const newUser = user.filter((user) => user.id === parseId);

     return (
          <div>
               <h2>ID : {newUser[0].id}</h2>
               <h2>Name :{newUser[0].name}</h2>
               <h2>Position :{newUser[0].position}</h2>
               <h2>Salary :{newUser[0].salary}</h2>

               <Link to={"/"}>
                     <button>Back Home</button>
               </Link>
          </div>
     )
}
