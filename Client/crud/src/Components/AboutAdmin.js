import { Link, Outlet } from 'react-router-dom';
export default function AboutAdmin() {
  return (
    <>
                <nav className="nav">
                            <Link to='/aboutadmin'>About Admin</Link>
                            <Link to='/aboutadmin/adminsee'>Admin see</Link>
                </nav>
                
                <Outlet />
                <div>About Admin</div>
                
    </>
  )
}
