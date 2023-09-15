import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";
import '../index.css';

export default function GuestLayout() {

    const {token} = useStateContext()
    // debugger;

  if (token) {
    return <Navigate to="/users" />
  }

  return (
    <div className="login-register-form animated fadeInDown">
      <div className="form">
              <Outlet />
      </div>
    </div>
  )
}
