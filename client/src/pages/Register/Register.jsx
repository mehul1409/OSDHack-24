import { useState } from 'react';
import './Register.css'

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const collectData = async (e)=>{
        e.preventDefault();
        console.log(name,email);
        let result = await fetch('http://localhost:8000/',{
            method:'post',
            body:JSON.stringify({name,email}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(result.json());   
    }

    return (
        <>
            <form onSubmit={collectData}>
            <div className="form-group">
                    <label htmlFor="exampleI">name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name "
                    value={name}
                    onChange={(e)=> setName(e.target.value) } />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value) } />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Register;