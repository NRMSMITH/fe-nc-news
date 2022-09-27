import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleArticle, updateVote, getComments } from "../utils/api";
import { CommentCard } from '../Components/CommentCard'

export const SingleArticle = () => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(0);
    const [err, setErr] = useState(null);
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();

    const changeVote = () => {
        setErr(null)
        setCount(count + 1)
        updateVote(article_id)
        .catch((err) => {
            setErr('Something went wrong, please try again.')
            setCount((count) => count - 1);
        })
    }

    useEffect(() => {
        setIsLoading(true);
        getSingleArticle(article_id)
        .then((data) => {
            setSingleArticle(data.result)
            setIsLoading(false)
        })
    }, [article_id])

    useEffect(() => {
        setIsLoading(true);
        getComments(article_id)
        .then((data) => {
            setComments(data.comments)
            setIsLoading(false);
        })
    }, [article_id])

    if(isLoading) return <h4>Getting your article ...</h4>
return (
    <section>
        <h2>{singleArticle.title}</h2> <h3>(by {singleArticle.author})</h3>
        <p>{singleArticle.body}</p>
        <p>Votes: {singleArticle.votes + count}</p>
        {err && <p>{err}</p>}
        <button onClick={changeVote}>Vote for me!</button>
        <h3>Comments:</h3>
        {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
              />
            ); 
        })}
    </section>
)

}