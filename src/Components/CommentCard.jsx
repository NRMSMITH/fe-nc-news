export const CommentCard = ({comment}) => {
    return (
      <li className="comment_card" key={comment.comment_id}>
          <h4>{comment.author} {comment.votes}</h4>
          <p>{comment.body}</p>
      </li>
    );
}