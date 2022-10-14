import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password} = credentials
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // redirect to
      localStorage.setItem('token', json.authtoken)
      navigate("/")
      props.showAlert("Account Created Successfully", "success")
    }
    else {
      props.showAlert("Invalid Details", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div className="container mt-2">
      <h2 className="my-2">Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password1" className="form-label">Password</label>
          <input type="password" name="password" value={credentials.password} onChange={onChange} require minLength="5" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword1" className="form-label">Confirm Password</label>
          <input type="password" name="cpassword" value={credentials.cpassword} onChange={onChange} require minLength="5" className="form-control" id="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Signup