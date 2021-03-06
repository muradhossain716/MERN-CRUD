import { Link, useNavigate } from "react-router-dom";

export default function ViewData({users,deteleMethod,handleEdit}) { 
  const navigate = useNavigate();
  const edit=(user)=>{
    navigate("/updatedata", { replace: true });
    handleEdit(user);
  }
  return (
    <div className="view">
      <div className="content">
     <nav className="nav">
          <Link to='/'>View Data</Link>
          <Link to='/adddata'>Add Data</Link>
        </nav>
        
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Button</th>
            </tr>
        </thead>
        <tbody>

          {
              users.map((user)=>
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                  <button type='button' onClick={()=>deteleMethod(user._id)}>Delete</button>/
                  <button type='button' onClick={()=>edit(user)}>Edit</button>
                  </td>
                </tr>
              
              )
          }
        </tbody>
    </table>
    </div>
      
    </div>
  )
}


