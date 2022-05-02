import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
     const [user, setUser] = useState([
          {id : 1, name : "Salman", position : "Web Dev", salary : 28000},
          {id : 2, name : "Shuvo", position : "Data Science", salary : 27000},
          {id : 3, name : "Mehedi", position : "Graphic Designer", salary : 29000}
     ])

     return (
          <UserContext.Provider value={[user, setUser]}>
               {children}
          </UserContext.Provider>
     )
}