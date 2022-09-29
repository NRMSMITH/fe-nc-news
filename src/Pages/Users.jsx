import { useEffect, useState } from "react";
import { UserCard } from "../Components/UserCard";
import { getUsers } from "../utils/api";

export const Users = () => {
const [users, setUsers] = useState([])


useEffect(() => {
    getUsers()
    .then((data) => {
        setUsers(data.users)
    })
}, [])

return (
    <section>
        <ul>
            {users.map((user) => {
                return <UserCard key={user.username} user={user} />
            })}
        </ul>
    </section>
)

}