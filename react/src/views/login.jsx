import { Link } from "react-router-dom";


export default function login() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    
        <form onSubmit={onSubmit}>
          <h1 className="title">Login in your account</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/register">Create an account!</Link>
          </p>
        </form>
  )
}
