import { useEffect, useState, useContext } from "react";
import { UserCard } from "../Components/UserCard";
import { UserContext } from "../Contexts/User";
import { getUsers } from "../utils/api";

export const Users = () => {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)
const { setLoggedInUser } = useContext(UserContext)


useEffect(() => {
    setIsLoading(true)
    getUsers()
    .then((data) => {
        setUsers(data.users)
        setIsLoading(false)
    })
}, [])

if (isLoading) {
    return <p>Getting your users ...</p>
}


return (
    <section>
        <ul className="user_list">
            {users.map((user) => {
                return <li> <UserCard key={user.username} user={user} />
                <button onClick={() => setLoggedInUser(user)}>Log In As {user.username}</button>
                 </li>
            })}
        </ul>
    </section>
)

}