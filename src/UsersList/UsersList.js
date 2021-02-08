import React,{useState,useEffect} from 'react'
import axios from 'axios'

import './UsersList.scss'

const UsersList = () => {
    const [Users, setUsers] = useState([]);
    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
            fetchUsers();
    }, [])
    return (
        <div>
            <h1> Users List </h1>
            {Users.map((user)=>
            <div class="container">
            <table class="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{user.name}</th>
                  <td data-title="Released">{user.email}</td>
                  <td data-title="Studio">{user.address.city}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
            )}
        </div>
    )
}

export default UsersList
