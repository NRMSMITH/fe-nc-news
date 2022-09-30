import { UserContext } from "../Contexts/User";
import { deleteComment } from "../utils/api";
import { useContext, useState } from 'react'

export const CommentCard = ({comment}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const {loggedInUser} = useContext(UserContext)
  const handleClick = (e, comment_id) => {
    e.preventDefault();
    setIsLoading(true)
    deleteComment(comment_id)
    .then((data) => {
      setIsLoading(false)
      setIsDeleted(true)
    })
  }
if (isLoading) {
  return <p> Deleting your comment ... </p>
}

if (isDeleted){ 
  return <p>Comment deleted!</p>
}
    return (
      <li className="comment_card" key={comment.comment_id}>
          <h4>{comment.author} [{comment.votes}]</h4>
          <p>{comment.body}</p>
          {loggedInUser.username === comment.author ? <button onClick={(e) => handleClick(e, comment.comment_id)}>Delete</button> : <button disabled onClick={(e) => handleClick(e, comment.comment_id)}>Delete</button>}
      </li>
    );
}