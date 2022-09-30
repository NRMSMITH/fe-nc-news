import { UserContext } from '../Contexts/User';
import { useContext } from 'react'
import Navbar from './Navbar'

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  return (
    <header>
      <h1 className="header">
        NS News
      </h1>
      <section>
        <img className="profile_img" src={loggedInUser.avatar_url} alt={`portrait of ${loggedInUser.username}`}></img>
        <p>{loggedInUser.username}</p>
      </section>
      {<Navbar />}
    </header>
  );
};

export default Header;
