import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Nav = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <Link to="/" className="text-purple-600  font-extrabold normal-case text-4xl">Chef Recipe</Link>
  </div>
  <div className="flex-none gap-10">
    <div className='font-bold text-xl text-purple-600 '>
      <Link className='mr-3' to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
        <div>{user ? <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div> : <Link to="/login" className='btn btn-primary btn-sm mr-5'>Login</Link>}</div>
  </div>
</div>
    );
};

export default Nav;