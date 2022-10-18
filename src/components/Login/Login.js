import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';
const Login = () => {
   const navigate = useNavigate();
   const { signInUser } = useContext(AuthContext);
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signInUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div className="form-container">
         <h2 className="form-title">Login</h2>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">password</label>
               <input type="password" name="password" required />
            </div>
            <input className="btn-submit" type="submit" value="Login" />
         </form>
         <p>
            New to ema john <Link to="/signup">Create a new Account</Link>
         </p>
      </div>
   );
};

export default Login;
