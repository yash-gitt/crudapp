import React, {useState, useEffect} from 'react';
import './AddUsers.css';
import { Link,useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


const EditUsers = () => {
    let navigate = useNavigate();
    const {id} = useParams();
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
    
    useEffect(() => {
        loadUser();
    }, []);


    const onSubmit= async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        navigate.push("/")
 
    }

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data)


    }
    
    return (
        <div >
            <h1 className='divh'>Edit Data</h1>
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
                <Link className='btn btn-info' to='/'>Edit User</Link>
            </form>
        </div>

    )

}
 




export default EditUsers;
