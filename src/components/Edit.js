import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
import CreateUser from './CreateUser';

export default function Edit() {

     const { id } = useParams();
     const [myContext, setMyContext] = useContext(UserContext);



     return (
          <>
               <h1>Edit</h1>
               <CreateUser />
          </>
     )
}
