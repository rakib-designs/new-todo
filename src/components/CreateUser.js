import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext/UserContext';
import Button from './Button';
import Input from './Input';

export default function CreateUser() {

     const [id, setId] = useState("");
     const [name, setName] = useState("");
     const [position, setPosition] = useState("");
     const [salary, setSalary] = useState("");
     const [error, setError] = useState("");

     const [oldUsers, setOldUser] = useContext(UserContext)

     const getId = (event) => {
          const inputValue = event.target.value;
          const parseId = parseFloat(inputValue);
          setId(parseId)

          const filteredId = (oldUsers.filter((user) => user.id === parseId));
          console.log(filteredId);
          if (filteredId[0].id === parseId) {
              return setError(`This id(${filteredId[0].id}) already has been exist`)
          } 
          setError(`success`);
     }

     const getName = (event) => {
          const getName= event.target.value;
          setName(getName)
     }

     const getPosition = (event) => {
          const getPosition= event.target.value;
          setPosition(getPosition)
     }

     const getSalary = (event) => {
          const getSalary= event.target.value;
          setSalary(getSalary)
     }
     
     const handleSubmit = (event) =>{
          event.preventDefault()
          setOldUser([...oldUsers, {id, name, position, salary}]);
     }

     return (
          <div>
               
               <form onSubmit={handleSubmit}>
                    <div>
                         <label htmlFor="id">Id:</label>
                         <Input type="text" placeholder="Enter Id" id="id" name="id" value={id} handleChange={getId} required/>
                         {error && <p>{ error }</p>}
                    </div>
                    
                    <div>
                         <label htmlFor="name">Name:</label>
                         <Input type="text" placeholder="Enter Name" id='name' name='name' value={name} handleChange={getName} required/>

                    </div>
                    
                    <div>
                         <label htmlFor="position">Position:</label>
                         <Input type="text" placeholder=" Enter Position" id='position' name='position' value={position} handleChange={getPosition} required/>
                    </div>
                    
                    <div>
                         <label htmlFor="salary">Salary:</label>
                         <Input type="text" placeholder="Enter Salary" id='salary' name='salary' value={salary} handleChange={ getSalary } required/>
                    </div>
                    
                    <div>
                         <Button type="submit">Add User</Button>
                         <Link to={'/'}><button>Back Home</button></Link>
                    </div>

               </form>
               
          </div>
     )
}
