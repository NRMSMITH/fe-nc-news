import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ArticleCard } from '../Components/ArticleCard'
import { getArticles } from '../utils/api'

 export const Topics = () => {
    const [params, setParams] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [order, setOrder] = useState("asc")
  const  {topic_name, created_at, comment_count, votes}  = useParams()

useEffect(() => {
  setIsLoading(true)
  getArticles({params, topic_name, order, created_at, comment_count, votes}).then((data) => {
    setArticles(data.articles);
    setIsLoading(false)
  });
}, [params, topic_name, order, created_at, comment_count, votes]);

  const handleSort = (sort_by) => {
    setParams((currParams) => {
      return { ...currParams, sort_by };
      });
    };
  
  const handleOrder = (column) => {
    setOrder((prevOrder) => {
      if (prevOrder === "asc") {
        return "desc"
      } else {
        return "asc"
      }
    })
    };


if (isLoading) return <h4>Getting your articles ...</h4>

    return (
      <section>
        <button onClick={() => handleSort("title")}>Sort By Title</button>
        <button onClick={() => handleSort("created_at")}>Sort By Date</button>
        <button onClick={() => handleSort("comment_count")}>
          Sort By Comments
        </button>
        <button onClick={() => handleSort("votes")}>
          Sort By Votes
        </button>
        <button onClick={() => handleOrder("desc")}>Change To: {order}</button>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
 }