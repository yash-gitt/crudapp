import React, {useState} from 'react';
import './AddUsers.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'


const Addusers = () => {
    let navigate = useNavigate;
    const [user, setUser]=  useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""


    })
    const {name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit= async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        navigate.push("/")
 
    }

    return (
        <div >
            <h1 className='divh'>Add A Users</h1>
            <form className='div' onSubmit={e=> onSubmit(e)}>
                <div class="form-group mb-2" >
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" name="name" value={name} onChange={e=> onInputChange(e)}/>
                </div>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Username" name="username" value={username} onChange={e=> onInputChange(e)}/>
                </div>
                <div class="form-group mb-2">
                    <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your E-mail" name="email" value={email} onChange={e=> onInputChange(e)}/>
                </div>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Phone Number" name="phone" value={phone} onChange={e=> onInputChange(e)}/>
                </div>
                <div class="form-group mb-2">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Website Name" name="website" value={website} onChange={e=> onInputChange(e)} />
                </div>
                <button className='btn btn-secondary' >Add User</button>
            </form>
        </div>

    )

}
 

export default Addusers;