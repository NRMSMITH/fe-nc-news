const { loggedInUser, setLoggedInUser } = useContext(UserContext)

export const UserCard = ({user}) => {
  return (
    <li className="user_card" key={user.username}>
        <img className="user_imgs" alt="User" src={`${user.avatar_url}`}></img>
        <p>{user.username}</p>
        {loggedInUser.username === '' ? <button className="log_button" onClick={() => setLoggedInUser(user)}>Log In As {user.username}</button> : <button className="log_button" disabled>Logged In As {loggedInUser.username}</button>}
    </li>
  );}