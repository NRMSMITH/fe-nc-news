import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api";

export const SingleArticle = () => {

    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { article_id } = useParams();

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
        <p>Votes: {singleArticle.votes}</p>
    </section>
)

}