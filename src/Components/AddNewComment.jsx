import { useState } from "react";
import { addComment } from '../utils/api'
export const AddNewComment = ({ article, setComments }) => {
  const [newComment, setNewComment] = useState({
    body: "",
    username: "jessjelly"
  });
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState(false)
  const [posted, setPosted] = useState(false)

  const handleOnChange = (e) => {
    setNewComment((previousObject) => {
      const newObject = { ...previousObject };
      newObject.body = e.target.value;
      return newObject;
    });
  };

const handleOnSubmit = (e) => {
  e.preventDefault();
  setError(false)
  setPosting(true)
  setPosted(false)
  return addComment(newComment, article.article_id)
  .then((data) => {
    setPosting(false)
    setPosted(true)
    setComments((currComments) => {
      const newArr = [ ...currComments]
      newArr.push(data.comment)
      return newArr;
    })
    setNewComment(() => {
      return {
        body: "",
        username: "jessjelly",
      };
    })
  })
  .catch((err) => {
    setPosting(false)
    setError(true)
    setPosted(false)
  })
}

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <label>Username:</label>
      <p>"You are currently logged in as: jessjelly"</p>
      <label htmlFor="body">Comment:</label>
      <br />
      <textarea
        disabled={posting}
        id="body"
        placeholder="This article ..."
        required
        rows="2"
        columns="6"
        value={newComment.body}
        onChange={(e) => {
          handleOnChange(e);
        }}
      ></textarea>
      <br />
      {posting && <p>Posting to comments ... </p>}
      {error && <p>Something went wrong. Please try again!</p>}
      {posted && <p>Your comment has been posted!</p>}
      <br />
      <button disabled={posting}>Add Your Comment</button>
    </form>
  );
};
