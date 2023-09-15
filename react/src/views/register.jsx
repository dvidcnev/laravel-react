import { Link } from "react-router-dom";

export default function register() {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    
        <form onSubmit={onSubmit}>
          <h1 className="title">Register an account</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password confirmation" />
          <button type="submit" className="btn btn-block">Register</button>
          <p className="message">
            Already registered? <Link to="/login">Sign in!</Link>
          </p>
        </form>
      
  )
}
