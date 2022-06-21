import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function Adddata({handleClick}) {
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    // const handleClick=()=>{
    //     const user={
    //       Name:name,Age:parseInt(age,10)
    //     };
    //     const usersTemp=[...users];
    //     usersTemp.push(user);
    //     addUser(user)
    //   }
      
  
  return (
    <div className="content">
    <nav>
          <Link to='/'>View Data</Link>
          <Link to='/adddata'>Add Data</Link>
        </nav>
        <div className="inputbox">
          <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
          <input type='text' placeholder='Age' onChange={(e)=>setAge(e.target.value)}/>
          <button type='button' onClick={()=>navigate("/", { replace: true },
          handleClick(name,age)
          ) }>Add User</button>
        </div>
    </div>
  )
}
