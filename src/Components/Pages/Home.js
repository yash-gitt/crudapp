import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        //console.log(result)
        setUsers(result.data);
    }

    const deleteUser  = async (id) =>{
      await axios.delete(`http://localhost:3001/users/${id}`)
      loadUsers();

    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
                <table className="table">
                    <thead>
                        <tr className='table-warning'>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index)=> (
                                <tr className='table'>
                                    <th scope="row" className='table-info'>{index+1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <Link className="btn btn-primary " to={`/users/view/${users.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary"   to={`/users/edit/${users.id}`} >Edit</Link>
                                        <button  className="btn btn-danger"  onClick={()=> deleteUser(users.id)}>Delete</button>
                                    </td>

                                </tr>

                        
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </div>

    )
}

export default Home