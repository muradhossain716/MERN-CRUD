import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adddata from './Components/Adddata';
import UpdateData from './Components/UpdateData';
import ViewData from './Components/ViewData';

const axios = require('axios').default;
function App() {
  const [users,setUsers]=useState([]);
   const [newName, setNewName]=useState();
  const [newAge,setNewAge]=useState(0);
  const [newUser,setNewUser]=useState([]);
  const [id,setId]=useState('')
  

  const getUsers=async ()=>{
    const data=await axios.get("http://localhost:5000/")
    setUsers(data.data)
  };




 
  const handleClick=async(name,age)=>{
    let user={
     name:name,age:age}
      await axios.post(`http://localhost:5000/add`,{user},{headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'}})
       getUsers();
}
  
const deteleMethod=async(id)=>{
  setId(id)
  await axios.delete(`http://localhost:5000/delete/${id}`);
  getUsers();
}

const handleEdit= (user)=>{
setNewName(user.name)
setNewAge(user.age)
setId(user._id)
console.log(user,'user')

}
const upDatedData= async({name,age,id})=>{
console.log(name,age,id,'updated')
  const newField={name:name,age:age};
  await  axios.put(`http://localhost:5000/update/${id}`,{newField},{headers: {'Accept': 'application/json',
  'Content-Type': 'application/json'}})
  setNewName(name)
  setNewAge(age)
  getUsers()


}


  useEffect(()=>{
    getUsers()
  },[])
  
  return (
    <>  
        <Routes>
          <Route path='/' element={<ViewData users={users} deteleMethod={deteleMethod} handleEdit={handleEdit}/>}/>
          <Route path='adddata' element={<Adddata handleClick={handleClick}/>} />
          <Route path='updatedata' element={<UpdateData  upDatedData={upDatedData} update={{id,newName,newAge}}/>} />
        </Routes>
      
    </>
  );
}

export default App;
