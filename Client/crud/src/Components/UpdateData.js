import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function UpdateData({update,upDatedData}) {
  const navigate = useNavigate();
  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  useEffect(()=>{
    setName(update.newName);
    setAge(update.newAge);
  },[update])
  return (
    <>
    <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type='text' placeholder='Age' onChange={(e)=>setAge(e.target.value)} value={age}/>
        <button type='button' onClick={()=>{
          navigate("/", { replace: true });
          upDatedData({name,age,id: update.id},console.log(update.id,'click update'))
      } }>Add User</button>
        </>
  )
}
