
export const UserCard = ({user}) => {
  return (
    <li className="user_card" key={user.username}>
        <img className="user_imgs" alt="User" src={`${user.avatar_url}`}></img>
        <p>{user.username}</p>
      <p>Log in as me</p>
    </li>
  );}