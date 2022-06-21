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
  const [id,setId]=useState(0);
  
  const handleClick=(name,age)=>{
    setId(id+1);
    let user={
     name:name,age:age,id:id}
     console.log(user,'id')
      // const createUser=async()=> await addDoc(userCollections,user);
      // createUser();
      axios.post(`http://localhost:5000/add`,{user},{headers: {'Accept': 'application/json',
      'Content-Type': 'application/json'}})
      getUsers()
}
  
const deteleMethod=(id)=>{
  axios.delete(`http://localhost:5000/delete/${id}`)
  // const delet=doc(db,'users',id);
  // await deleteDoc(delet);
  getUsers()


}

const handleEdit= (user)=>{
setId(user.id)
console.log(id,'id')
setNewName(user.name)
setNewAge(user.age)
console.log(user,'user')

}
// console.log(id,newName,newAge,'baki gula')
const upDatedData= async ({name,age,id})=>{
  // console.log(Name:name,Age:age,id,'updated')
  // name,age,id
  
  const newField={name:name,age:age};
  axios.put(`http://localhost:5000/update/${id}`,{newField},{headers: {'Accept': 'application/json',
  'Content-Type': 'application/json'}})
  setNewName(name)
  setNewAge(age)
  getUsers()


}

const getUsers=async ()=>{
  const data=await axios.get("http://localhost:5000/")
  setUsers(data.data)
  console.log(data.data,'users')
};
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
