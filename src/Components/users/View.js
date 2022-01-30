import React, {useState, useEffect} from 'react';
import './AddUsers.css';
import {Link,  useParams} from 'react-router-dom';
import axios from 'axios';









const View = () => {
    const [user, setUser]=  useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""


    })
    const {id} = useParams();
    const {name, username, email, phone, website} = user;

    useEffect(()=>{
       loadUser();
    }, [])
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data)


    }

    return (
        <div className='container'>
            <h1 className='display-4'>User Id : {id}</h1>
            <hr/>
            <ul className='list-group w-50'>
                <li className='list-group-item'> name:{name}</li>
                <li className='list-group-item'>username: {username}</li>
                <li className='list-group-item'>email: {email}</li>
                <li className='list-group-item'>phone: {phone}</li>
                <li className='list-group-item'>website: {website}</li>
            </ul>
            <Link className='btn btn-success back' to='/'>Back to Home</Link>


        </div>
    )

}

export default View;




