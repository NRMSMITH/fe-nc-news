import { useEffect, useState, useContext } from "react";
import { UserCard } from '../Components/UserCard'
import { UserContext } from "../Contexts/User";
import { getUsers } from "../utils/api";

export const Users = () => {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)


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
    <section className="user_area">
        <ul className="user_list">
            {users.map((user) => {
                return <div className="user_div"key={user.username}>
                <UserCard user={user} />
                </div>
            })}
        </ul>
    </section>
)

}