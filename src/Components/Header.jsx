import { UserContext } from '../Contexts/User';
import { useContext } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = ({value}) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)
  console.log(loggedInUser, '<<loggedInUser')
  console.log(value.setLoggedInUser, '<value.setloggedin')
  return (
    <header>
      <h1 className="header">
        NS News
      </h1>
      <section>
        {loggedInUser.username === '' ? <Link to='/users' ><h2>Log In</h2></Link> : <>
        <img className="profile_img" src={loggedInUser.avatar_url} alt={`portrait of ${loggedInUser.username}`}></img>
        <p>{loggedInUser.username}</p>
       <Link to='/'> <button className="log_out" onClick={(e) => setLoggedInUser({username: '', avatar_url: ''})}>Log Out</button> </Link>
        </>
        }
      </section>
      {<Navbar />}
    </header>
  );
};

export default Header;
