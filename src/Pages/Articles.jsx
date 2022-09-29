import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ArticleCard } from '../Components/ArticleCard'
import { getArticles } from '../utils/api'

 export const Topics = () => {
    const [params, setParams] = useState({order: "asc"});
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const { topic_name } = useParams();
  

useEffect(() => {
  setIsLoading(true)
  getArticles({...params, topic: topic_name}).then((data) => {
    setArticles(data.articles);
    setIsLoading(false)
  });
}, [params, topic_name]);


  
  const handleOrder = () => {
    setParams((currParams) => {
      if (currParams.order === "asc") {
        return {...currParams, order: "desc"}
      } else {
        return { ...currParams, order: "asc" };
      }
    })
    };

    const handleSubmit = (e) => {
          setParams((currParams) => ({ ...currParams, sort_by: e.target.value }));
    }

if (isLoading) return <h4>Getting your articles ...</h4>

    return (
      <section>
        <select value={params.sort_by} onChange={handleSubmit}>
          <option value='' disabled>Sort By ...</option>
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <select value={params.order} onChange={handleOrder}>
          <option value='' disabled>Order ...</option>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </select>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
 }