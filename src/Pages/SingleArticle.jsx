import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleArticle, updateVote } from "../utils/api";

export const SingleArticle = () => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(0);
    const { article_id } = useParams();

    const changeVote = () => {
        updateVote(article_id)
        setCount(count + 1)
    }

    useEffect(() => {
        setIsLoading(true);
        getSingleArticle(article_id)
        .then((data) => {
            setSingleArticle(data.result)
            setIsLoading(false)
        })
    }, [article_id])
    if(isLoading) return <h4>Getting your article ...</h4>

return (
    <section>
        <h2>{singleArticle.title}</h2> <h3>(by {singleArticle.author})</h3>
        <p>{singleArticle.body}</p>
        <p>Votes: {singleArticle.votes + count}</p>
        <button onClick={changeVote}>Vote for me!</button>
    </section>
)

}