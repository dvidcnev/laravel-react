import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../index.css';

export default function DefaultLayout() {
  // eslint-disable-next-line no-unused-vars
  const {user, token} = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  const onLogout = (e) => {
    e.preventDefault();
  }

  return (
    <div id="defaultLayout">

      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>

      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
          </div>
        </header>
        <main>
         <Outlet />
        </main>
      </div>
    </div>
  )
}
