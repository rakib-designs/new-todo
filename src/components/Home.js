import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';

export default function Home() {

     const [user] = useContext(UserContext);

     return (
     <>
          <Link to={"/create"}>
               <Button variant="primary">Create User</Button>
          </Link>
          
          <Table>
               <thead>
                    <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Position</th>
                         <th>Salary</th>
                         <th>Action</th>
                    </tr>
               </thead>

               <tbody>
               {user.map((user) => {
                    return <tr key={user.id}>
                         <td>{user.id}</td>
                         <td>{user.name}</td>
                         <td>{user.position}</td>
                         <td>{user.salary}</td>
                         <td>
                         <Link to={"/edit/"+user.id}>
                              <Button variant="info">Edit</Button>
                         </Link>
                         <Link to={"/read/"+user.id}>
                              <Button variant="success">Read</Button>
                         </Link>
                         <Link to={"/delete/"+user.id}>
                              <Button variant="danger">Delete</Button>
                         </Link>
                         </td>
                    </tr>
               })}
               </tbody>
          </Table>
     </>
     )
}
