import { UserContext } from "../Contexts/User";
import { deleteComment } from "../utils/api";
import { useContext } from 'react'

export const CommentCard = ({comment}) => {

  const {loggedInUser} = useContext(UserContext)
  const handleClick = (e, comment_id) => {
    e.preventDefault();

    deleteComment(comment_id)
    .then((data) => {})

  }

    return (
      <li className="comment_card" key={comment.comment_id}>
          <h4>{comment.author} [{comment.votes}]</h4>
          <p>{comment.body}</p>
          {loggedInUser.username === comment.author ? <button onClick={(e) => handleClick(e, comment.comment_id)}>Delete</button> : <button disabled onClick={(e) => handleClick(e, comment.comment_id)}>Delete</button>}
      </li>
    );
}