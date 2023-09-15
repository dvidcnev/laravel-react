import { Link } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function register() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser, setToken} = useStateContext()

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }
    // console.log(payload);

    axiosClient.post('/register', payload)
      .then(({data}) => {
          setUser(data.user)
          setToken(data.token)
      })
      .catch(err => {
        const response = err.response;
        if (response.status && response === 422) {
          console.log(response.data.errors);
        }
      })
  }

  return (
    
        <form onSubmit={onSubmit}>
          <h1 className="title">Register an account</h1>
          <input ref={nameRef} type="text" placeholder="Username" />
          <input ref={emailRef} type="email" placeholder="E-mail" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={passwordConfirmationRef} type="password" placeholder="Password confirmation" />
          <button type="submit" className="btn btn-block">Register</button>
          <p className="message">
            Already registered? <Link to="/login">Sign in!</Link>
          </p>
        </form>
      
  )
}
