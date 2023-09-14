import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

export default function GuestLayout() {

    const {token} = useStateContext()
    // debugger;

  if (token) {
    return <Navigate to="/users" />
  }

  return (
        <div>

            <Outlet />
        </div>
  )
}
